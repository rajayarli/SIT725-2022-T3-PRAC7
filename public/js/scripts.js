const cardList = [
  {
      title: "kangaroo 2",
      image: "images/kangaroo2.jpeg",
      link: "About kangaroo 2",
      desciption: "Demo desciption about kangaroo 2"
  },
  {
      title: "kangaroo 3",
      image: "images/kangaroo3.jpeg",
      link: "About kangaroo 3",
      desciption: "Demo desciption about kangaroo 3"
  }
]
const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!")
}

const addCards = (items) => {
  items.forEach(item => {
      let itemToAppend = '<div class="col s4 center-align">'+
  '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
  '</div><div class="card-content">'+
  '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
  '<div class="card-reveal">'+
      '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
      '<p class="card-text">'+item.desciption+'</p>'+
    '</div></div></div>';
    $("#card-section").append(itemToAppend)
  });
}



$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('#clickMeButton').click(()=>{
      submitForm();
  })
  addCards(cardList);
  $('.modal').modal();
});
