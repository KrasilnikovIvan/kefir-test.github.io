(function ($) {
    $(function () {
        var areaData;
        $.get('data/data.json', function (response) {
            areaData = response.map(function (area, index) {
                var newAreaData = {
                    "id": area.country,
                    "value": area.count_dtime,
                    "description": "Исследуемый параметр: " + area.count_dtime
                };
               return newAreaData;
            });
            console.log(areaData);
            createMap(areaData);
        });
    });

    function createMap(areaData) {
        var map = AmCharts.makeChart("map",{
            "type": "map",
            "language": "ru",
            "colorSteps": 10,
            "backgroundAlpha": 0.7,
            "backgroundColor": "#3987c9",
            "mouseWheelZoomEnabled": true,
            "zoomDuration": 0.25,
            "dataProvider": {
                "map": "worldLow",
                "areas": areaData,
                "getAreasFromMap": true
            },
            "areasSettings": {
                "autoZoom": true,
                "selectedColor": "#00CC00"
            },
            "valueLegend": {
                "right": 10,
                "minValue": "Мало",
                "maxValue": "Много!"
            }
        });
    }
})(jQuery);
