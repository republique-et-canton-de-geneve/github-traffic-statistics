plot(chvoteData, 'chvote-1.0', 120);
plot(chvoteProtocolPocData, 'chvote-protocol-poc', 35);
plot(edgSitgMapData, 'edg-sitg-map', 10);
plot(sedexMessageHandlerData, 'sedex-Message-Handler', 10);
plot(logChainerData, 'log-chainer', 10);
plot(squeletteGithubData, 'squelette-github', 10);
plot(joursFeriesData, 'jours-feries', 10);
plot(referentielsOfsData, 'referentiels-ofs', 10);
plot(blockchainDocumentHorodateurData, 'blockchain-document-horodateur', 10);
plot(pythonRedhatVirtualizationData, 'python-redhat-virtualization', 10);
plot(ginaLdapClientData, 'gina-ldap-client', 10);
plot(xxegePurgeData, 'xxege-purge', 10);
plot(gitSyncData, 'git-sync', 10);
plot(wlsSystemdScriptsData, 'wls-systemd-scripts', 10);

/**
 * Plots the statistics for one project.
 * @param data project's statistics
 * @param name projects's name, for display
 * @param maxY maximum value on the y axis. Using similar values for different projects provides a
 *        consistent view (the reader does not have to scale mentally)
 */
function plot(data, name, maxY) {
      // set the dimensions and margins of the graph
      const margin = {
          top: 100,
          right: 20,
          bottom: 30,
          left: 50};
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      // set the ranges (scales)
      const x = d3.scaleTime().range([0, width]);
      const y = d3.scaleLinear().range([height, 0]);

      // define the line of the number of unique cloners
      const clonersLine = d3
          .line()
          .x(function(d) { return x(d[0]); })
          .y(function(d) { return y(d[1]); });

      // define the line of the number of unique visitors
      const visitorsLine = d3
          .line()
          .x(function(d) { return x(d[0]); })
          .y(function(d) { return y(d[2]); });

      // append the svg object to the body of the page
      // append a 'group' element to 'svg'
      // move the 'group' element to the top left margin
      const svg = d3
          .select('body')
          .append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g').attr(
                  'transform',
                  'translate(' + margin.left + ',' + margin.top + ')');

      // format the data
      const parseTime = d3.timeParse('%b %Y');   // e.g., 'Oct 2019'
      data.forEach(function(d) {
//        console.log('d :', d[0], d[1], d[2], parseTime(d[0]));
        d[0] = parseTime(d[0]);
        d[1] = d[1];
        d[2] = d[2];
      });

      // scale the range of the data
      x.domain(d3.extent(data, function(d) { return d[0]; }));
      y.domain([0, maxY]);

      // add the clonersLine path
      svg.append('path')
          .data([data])
          .attr('class', 'cloners')
          .attr('d', clonersLine);

      // add the visitorsLine path
      svg.append('path')
          .data([data])
          .attr('class', 'visitors')
          .attr('d', visitorsLine);

      // add the x axis
      svg.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x));

      // add the y axis
      svg.append('g')
          .call(d3.axisLeft(y));

      // add a legend
      svg.append('text')
          .attr('x', width / 2)
          .attr('text-anchor', 'middle')
          .attr('class', 'legend')
          .text(name);
}
