document.getElementById('date').innerHTML = new Date().toDateString();
function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR9B_LbNU0mZzmex2igfB9rdxwPwbUHMpJLZDnPp0Qq9TghSD1adaeQlthMESTx25eC6NsIvVw6xSrw/pubhtml?gid=145255793&single=true',
                   callback: function(data, tabletop) { 
                       console.log(data)
                   },
                   simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)
