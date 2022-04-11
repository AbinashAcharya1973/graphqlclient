<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>GraphQL Client</title>      
      <script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
    </head>    
    <body>
    <div id="content">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Sales Entry</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" @click="dailysales">Daily Status</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link active" id="weekly-tab" data-toggle="tab" href="#weekly" role="tab" aria-controls="home" aria-selected="true">Weekly Sales Status</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Monthly Sales Status</a>
        </li>
        </ul>
        <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Sales Entry</div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <table class="table">
                <thead>
                    <th>Date</th>
                    <th>Hour</th>
                    <th>Hour Sales</th>
                </thead>
                <tbody>
                    <tr v-for="drow in dailysalesdata">
                        <td>{{drow.tdate}}</td>
                        <td>{{drow.hour}}</td>
                        <td>{{drow.hoursum}}</td>
                    </tr>
                </tbody>

            </table>
        </div>
        <div class="tab-pane fade" id="weekly" role="tabpanel" aria-labelledby="profile-tab">Weekly Sales</div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Monthly Sales</div>
        </div>
    </div>
    </body>
    <script>
        var app=new Vue({
                el:'#content',
                data:{
                    dailysalesdata:""
                },
                
                methods:{
                    dailysales:function(){
                        alert("Daily Sales");
                        axios({
                                url: 'http://localhost:4000/graphql',
                                method: 'post',
                                data: {
                                    query: `
                                    {
                                        dailySales(SDate:"2022-04-10") {
                                            tdate
                                            hour
                                            hoursum
                                        }
                                    }
                                    `
                                }
                                }).then((result) => {
                                let x=result.data;
                                this.dailysalesdata=x.data.dailySales;
                                });
                    }
                }
            });
    </script>
</html>