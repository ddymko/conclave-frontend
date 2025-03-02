<script>
    import { onMount } from "svelte";
    import * as d3 from "d3";

    let cpuData = [];
    let timeRange = "6h"; // Default time range

    // Fetch CPU Utilization Data
    async function fetchCpuData() {
        const prometheusUrl = `http://192.168.2.8:9090/api/v1/query?query=` +
            encodeURIComponent(`100 * (1 - rate(node_cpu_seconds_total{job="slurm-node", mode="idle"}[${timeRange}]))`);

        const response = await fetch(prometheusUrl);
        const result = await response.json();

        if (result.data && result.data.result) {
            cpuData = result.data.result.map(d => ({
                instance: d.metric.instance,
                cpu: parseInt(d.metric.cpu),
                usage: parseFloat(d.value[1]), // Get CPU usage percentage
            }));
            drawHeatmap();
        }
    }

    function updateTimeRange(event) {
        timeRange = event.target.value;
        fetchCpuData();
    }

    onMount(() => {
        fetchCpuData();
        const interval = setInterval(fetchCpuData, 5000);
        return () => clearInterval(interval);
    });

    function drawHeatmap() {
        const width = 800;
        const height = 400;
        const margin = { top: 30, right: 50, bottom: 50, left: 100 };

        d3.select("#heatmap").selectAll("*").remove();

        const svg = d3.select("#heatmap")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Get unique cores and instances
        const cores = [...new Set(cpuData.map(d => d.cpu))].sort((a, b) => a - b);
        const instances = [...new Set(cpuData.map(d => d.instance))];

        // Define scales
        const xScale = d3.scaleBand().domain(cores).range([0, width]).padding(0.05);
        const yScale = d3.scaleBand().domain(instances).range([0, height]).padding(0.05);
        const colorScale = d3.scaleSequential(d3.interpolateRdYlGn).domain([100, 0]); // Red = High usage, Green = Low usage

        // Draw heatmap cells
        svg.selectAll("rect")
            .data(cpuData)
            .enter()
            .append("rect")
            .attr("x", d => xScale(d.cpu))
            .attr("y", d => yScale(d.instance))
            .attr("width", xScale.bandwidth())
            .attr("height", yScale.bandwidth())
            .attr("fill", d => colorScale(d.usage))
            .attr("stroke", "#2a2a2a")
            .style("opacity", 0.9)
            .on("mouseover", function (event, d) {
                d3.select(this).attr("stroke", "black");
                d3.select("#tooltip")
                    .style("opacity", 1)
                    .html(`${d.instance} - CPU ${d.cpu}: ${d.usage.toFixed(1)}%`)
                    .style("left", event.pageX + "px")
                    .style("top", event.pageY - 28 + "px");
            })
            .on("mouseout", function () {
                d3.select(this).attr("stroke", "#2a2a2a");
                d3.select("#tooltip").style("opacity", 0);
            });

        // Add X-axis (CPU Cores)
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale).tickFormat(d => `Core ${d}`))
            .selectAll("text")
            .attr("font-size", "12px")
            .style("fill", "#ccc");

        // Add Y-axis (Instances)
        svg.append("g").call(d3.axisLeft(yScale))
            .selectAll("text")
            .attr("font-size", "12px")
            .style("fill", "#ccc");

        // Color Legend
        const legend = svg.append("g")
            .attr("transform", `translate(${width + 20}, 0)`);

        const legendScale = d3.scaleLinear()
            .domain([100, 0])
            .range([0, height]);

        const legendAxis = d3.axisRight(legendScale)
            .ticks(5)
            .tickFormat(d => `${d}%`);

        legend.append("g")
            .attr("transform", "translate(30,0)")
            .call(legendAxis)
            .selectAll("text")
            .attr("font-size", "12px")
            .style("fill", "#ccc");

        const legendColors = d3.range(0, 100, 10).reverse();
        legend.selectAll("rect")
            .data(legendColors)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr("y", d => legendScale(d))
            .attr("width", 30)
            .attr("height", (height / legendColors.length))
            .attr("fill", d => colorScale(d));
    }
</script>

<div class="p-4">
    <h2 class="text-lg font-bold text-gray-900 mb-4">CPU Core Usage Heatmap</h2>

    <!-- Time Range Selector -->
    <label for="timeRange" class="mr-2 text-gray-700">Time Range:</label>
    <select id="timeRange" bind:value={timeRange} on:change={updateTimeRange} class="border px-2 py-1 rounded">
        <option value="1h">Last 1 Hour</option>
        <option value="3h">Last 3 Hours</option>
        <option value="6h" selected>Last 6 Hours</option>
        <option value="12h">Last 12 Hours</option>
        <option value="24h">Last 24 Hours</option>
    </select>

    <!-- Heatmap Container -->
    <div id="heatmap" class="w-full h-[400px]"></div>

    <!-- Tooltip -->
    <div id="tooltip" class="absolute bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0"></div>
</div>