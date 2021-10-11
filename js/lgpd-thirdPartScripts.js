/… Trecho de código

const allowedScripts = JSON.parse(localStorage.acceptedLocalData);

//…

const runPerformanceScripts = () => {
        console.log(‘executando scripts de desempenho‘);
        // ===================Google Analytics=================
        (function (i, s, o, g, r, a, m) {
            i[‘GoogleAnalyticsObject‘] = r;
            (i[r] =
                i[r] ||
                function () {
                    (i[r].q = i[r].q || []).push(arguments);
                }),
                (i[r].l = 1 * new Date());
            (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);

            a.async = 1;           
  a.src = g;            
m.parentNode.insertBefore(a, m);        
})(window, document, ‘script‘, ‘https://www.google-analytics.com/analytics.js‘, ‘ga‘);        

//coloque seu código do analytics aqui
        ga(‘create‘, ‘UA-202299725-1‘, ‘auto‘);

        ga(‘send‘, ‘pageview‘);
        console.log(‘scripts de desempenho executados‘);

    };//…
    const runScripts = () => {
       //…
        if (allowedScripts.performance == ‘accepted‘) {
            runPerformanceScripts();
        }
       //…
    };

    runScripts();
//…