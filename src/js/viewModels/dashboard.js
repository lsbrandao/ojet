define(['ojs/ojcore', 'knockout', 'jquery', 'text!data/store_data.json', 'ojs/ojlabel', 'ojs/ojselectcombobox', 'ojs/ojchart', 'ojs/ojtoolbar', 'ojs/ojlistview', 'ojs/ojarraydataprovider'],
  function (oj, ko, $, file) {

    function DashboardViewModel() {
      var self = this;
      var activitiesArray = JSON.parse(file);

      self.val = ko.observable("pie");

      self.activityDataProvider = ko.observable(new oj.ArrayDataProvider(activitiesArray, {
        keyAttributes: "id"
      }));

      /* toggle button variables */
      self.stackValue = ko.observable('off');
      self.orientationValue = ko.observable('vertical');

      /* chart data */
      var barSeries = [{
          name: "Baseball",
          items: [42, 34]
        },
        {
          name: "Bicycling",
          items: [55, 30]
        },
        {
          name: "Skiing",
          items: [36, 50]
        },
        {
          name: "Soccer",
          items: [22, 46]
        }
      ];

      var barGroups = ["Group A", "Group B"];

      self.barSeriesValue = ko.observableArray(barSeries);
      self.barGroupsValue = ko.observableArray(barGroups);
    }

    return new DashboardViewModel();
  });