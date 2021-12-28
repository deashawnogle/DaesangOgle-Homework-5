

    //variables
    const saveButton = $('.saveBtn');
    const currentTime = moment().format("ddd MM Do");

    $('#currentDay').text(moment().format('LLLL'));

    const date = new Date();
    const hour = date.getHours();
    const todo = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : {};

    function createElement() {
        for (let i = 9; i < 19; i++) {
            $(".container").append(`
                    <div class="row time-block">
                      <h2 class="hour col-2">${i < 12 ? i + ":00AM" : i > 12 ? i - 12 + ":00PM" : "12:00PM"}</h2>
                      <textarea id="${i}" class="description col-8 ${i > hour ? "future" : i < hour ? "past" : "present"}" type="text">${todo[i] || ""}</textarea>
                      <button data-id="${i}" class="saveBtn col-2">Save</button>
                  </div>`)
        }
        $('.saveBtn').on("click", function(){
            let dataId = $(this).attr("data-id")
            let textarea = $("#" + dataId).val()
            localStorage.setItem(dataId, textarea)
        })

    }

    createElement()

    function showText() {
        for (let i = 9; i < 19; i++) {
            if (localStorage.getItem(i)){
                $("#" + i).val(localStorage.getItem(i))
            }
            
        }
    }

    showText()

// //title
// // const titleEl = $('h1');

// // // titleEl.text('Work Day Scheduler');
// // titleEl.addClass('p-5');
// // titleEl.css('border', 'rgb(122, 242, 242) 5px solid');
