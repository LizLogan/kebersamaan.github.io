$('#btn-slider').click(function () {
  if ($('#sliders').hasClass('active')) {
    $('#sliders').removeClass('active');
    $('#sliders-background').removeClass('active');
  } else {
    $('#sliders').addClass('active');
    $('#sliders-background').addClass('active');
  }
});

$('#sliders-background').click(function () {
  $('#sliders').removeClass('active');
  $('#sliders-background').removeClass('active');
});

var app = new (function () {
  this.el = document.getElementById('tasks');
  this.tasks = [];

  this.FetchAll = function () {
    var data = '';

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += '<tr>';
        data += '<td class="ps-2 w-100">' + (i + 1) + '.' + ' ' + this.tasks[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')" class="crud-btn align-middle"><i class="bx bxs-edit text-warning fs-5 " ></i></button></td> ';
        data += '<td class="pe-1"><button onclick="app.Delete(' + i + ')" class="crud-btn align-middle"><i class="bx bx-trash text-danger fs-5 "></i></button></td> ';
        data += '</tr>';
      }
    }
    this.Count(this.tasks.length);
    return (this.el.innerHTML = data);
  };

  this.Add = function () {
    el = document.getElementById('add-todo');
    var task = el.value;
    if (task) {
      this.tasks.push(task.trim());
      el.value = '';
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    el = document.getElementById('edit-todo');
    el.value = this.tasks[item];
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function () {
      var task = el.value;
      if (task) {
        self.tasks.splice(item, 1, task.trim());
        self.FetchAll();
        CloseInput();
      }
    };
  };

  this.Delete = function (item) {
    this.tasks.splice(item, 1);
    this.FetchAll();
  };

  this.Count = function (data) {
    var el = document.getElementById('counter');
    var name = 'Tasks';
    if (data) {
      if (data == 1) {
        name = 'Task';
      }
      el.innerHTML = data + ' ' + name;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
})();

app.FetchAll();
function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}

// Setup
const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'My Dataset',
      data: [12, 25, 19, 30, 10],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1,
      tension: 0.2,
    },
  ],
};

// Config block
const config = {
  type: 'line',
  data,
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// init / render block
const myChart = new Chart(document.getElementById('myChart'), config);

// Setup
const piedata = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'My Dataset',
      data: [12, 25, 19, 30, 10],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1,
      tension: 0.2,
    },
  ],
};

// Config block
const pieconfig = {
  type: 'pie',
  data: piedata,
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// init / render block
const myChartTwo = new Chart(document.getElementById('myChartTwo'), pieconfig);
