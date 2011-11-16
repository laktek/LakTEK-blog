$(function(){

 var icons = {
   "home": {
    path:  "M99.585,49.144c-6.011-6.031-12.021-12.061-18.032-18.092c-0.306-0.307-0.52-0.484-0.665-0.578  c0.021-0.076,0.035-0.181,0.035-0.335c0-2.175,0-4.351,0-6.526c0-4.371,0-8.741,0-13.112c0-0.794-0.663-1.457-1.457-1.457  c-3.158,0-6.315,0-9.474,0c-0.794,0-1.457,0.663-1.457,1.457c0,2.497,0,4.993,0,7.49C62.7,12.136,56.865,6.281,51.03,0.426  c-0.304-0.304-0.645-0.424-0.975-0.424C50.037,0,50.019,0.001,50,0c-0.019,0.001-0.037,0-0.056,0.002  c-0.33,0-0.671,0.12-0.975,0.424C32.785,16.665,16.6,32.904,0.415,49.144c-0.897,0.899-0.243,2.486,1.03,2.486  c3.322,0,6.646,0,9.969,0c0,10.251,0,20.502,0,30.753c0,0.794,0.663,1.457,1.457,1.457c10.353,0,19.735,0,30.089,0  c0.793,0,1.456-0.663,1.456-1.457c0-7.171,0-14.342,0-21.514c3.075,0,8.093,0,11.168,0c0,7.172,0,14.343,0,21.514  c0,0.794,0.663,1.457,1.456,1.457c10.354,0,19.736,0,30.09,0c0.793,0,1.456-0.663,1.456-1.457c0-10.251,0-20.502,0-30.753  c3.323,0,6.646,0,9.969,0C99.827,51.63,100.482,50.043,99.585,49.144z",
    dimensions: [100, 83.84]
   },
   "about": {
    path: "M98.574,67.99C96.458,57.071,67.338,58.232,60.32,49.68c-1.48-1.805-1.48-1.805-0.488-8.507  c1.694-7.502,3.229-2.846,5.651-17.809C67.517,10.798,63.177,0,50,0S32.483,10.798,34.517,23.364  c2.422,14.963,3.956,10.307,5.651,17.809c0.992,6.702,0.992,6.702-0.488,8.507C32.662,58.232,3.542,57.071,1.426,67.99  C1.175,69.282,0,76.434,0,76.434h100C100,76.434,98.825,69.282,98.574,67.99z", 
    dimensions: [100, 76.434]
   },
   "archive": {
    path: "M67.541,0L14.616,2.714L0,7.311V73.49l45.855,26.474V100l0.039-0.012l0,0l16.991-5.338V66.18h4.655V0z M60.492,93.025  l-12.223,3.94V33.062L4.358,7.571l12.081-3.804l44.071,25.444L60.492,66.18V93.025z",
    dimensions: [67.541, 100]
  },
  "rss": {//(from http://raphaeljs.com/icons/)
    path: "M4.135,16.762c3.078,0,5.972,1.205,8.146,3.391c2.179,2.187,3.377,5.101,3.377,8.202h4.745c0-9.008-7.299-16.335-16.269-16.335V16.762zM4.141,8.354c10.973,0,19.898,8.975,19.898,20.006h4.743c0-13.646-11.054-24.749-24.642-24.749V8.354zM10.701,25.045c0,1.815-1.471,3.287-3.285,3.287s-3.285-1.472-3.285-3.287c0-1.813,1.471-3.285,3.285-3.285S10.701,23.231,10.701,25.045z",
    dimensions: [32, 32]
  },
  "twitter": {//(from http://raphaeljs.com/icons/)
    path: "M23.295,22.567h-7.213c-2.125,0-4.103-2.215-4.103-4.736v-1.829h11.232c1.817,0,3.291-1.469,3.291-3.281c0-1.813-1.474-3.282-3.291-3.282H11.979V6.198c0-1.835-1.375-3.323-3.192-3.323c-1.816,0-3.29,1.488-3.29,3.323v11.633c0,6.23,4.685,11.274,10.476,11.274h7.211c1.818,0,3.318-1.463,3.318-3.298S25.112,22.567,23.295,22.567z",
    dimensions: [32, 32]
  },
  "tags": {//(from http://raphaeljs.com/icons/))
    path: "M14.263,2.826H7.904L2.702,8.028v6.359L18.405,30.09l11.561-11.562L14.263,2.826zM6.495,8.859c-0.619-0.619-0.619-1.622,0-2.24C7.114,6,8.117,6,8.736,6.619c0.62,0.62,0.619,1.621,0,2.241C8.117,9.479,7.114,9.479,6.495,8.859z",
    dimensions: [32, 32]
  }

 };

 var set_icon = function(icon_span, opts){
  var options = $.extend({'height': 25, 'width': 25}, opts)
  var icon_obj = icons[icon_span.data('icon')];

   var icon = Raphael(icon_span[0], options['width'], options['height']);
   icon.path(icon_obj["path"]).attr({fill: "#1777AF", stroke: "none"})
   icon.setViewBox(0, 0, icon_obj["dimensions"][0], icon_obj["dimensions"][1]);
 };

 //sidebar icons
 $("a.link_with_icon").each(function(){
   var icon_span = $(this).find("span[role=icon]");
   set_icon(icon_span);
 });

 //attach event for hovers
 $("a.link_with_icon").hover(function(){
   $(this).find("span[role=icon] path").attr("fill", "#282828");
 },
 function(){
   $(this).find("span[role=icon] path").attr("fill", "#1777AF");
 });

 //Tags icon
 
 $("div[role=tags] *[role=icon]").each(function(){
   set_icon($(this), {'height': 20, 'width': 20});
   $(this).find('span').hide();
 });
 
 /* HOME PAGE */

 // set the content based on screen width 
 var paras_to_show = null;
 var reduce_lists_flag = false;

 var reduce_lists = function(){
   //reduce the lists
   if(reduce_lists_flag){
     //show only first 3 items
     $("div.home.posts ul").each(function(){
       var list_items = $(this).find("li");
       $(list_items).addClass('hide');
       $(list_items.splice(0, 3)).removeClass('hide');
     });
   }
   else {
     $($("div.home.posts ul").find("li")).removeClass('hide');
   }
 };

 var set_content_to_width = function() {
   var client_width = document.documentElement.clientWidth || document.body.clientWidth; 
   if(client_width < 768){
     paras_to_show = 1;
     reduce_lists_flag = true;
   }
   else if(client_width > 768 & client_width < 1382){
     paras_to_show = 2;
     reduce_lists_flag = false;
   }
   else {
     paras_to_show = 3;
     reduce_lists_flag = false;
   }

   //trim the article
   if(paras_to_show > 0){
     var article_extract_obj = $("<div></div>");
     article_extract_obj.append(raw_article);

     $('article[role=latest] div.entry-content').html($(article_extract_obj.find('p')[paras_to_show]).prevAll(':not(h2, h3, h4)'));
     $('article[role=latest] div.entry-content').show();
   }

   reduce_lists();
 };

 // store the full article
 var raw_article = $('article[role=latest] div.entry-content').html();

 $(window).resize(set_content_to_width);
 //call the function on load
 set_content_to_width();

 var load_posts_list = function(url, after_each, after_all){
    // load JSON
    $.getJSON(url, function(data){
      $.each(data, function(i){
        var short_month_names = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        var post_date = Date.parse(this.date.substr(0, 10));
        this["formatted_date"] = post_date.getUTCDate() + ' ' + short_month_names[post_date.getUTCMonth()] + ' ' + post_date.getUTCFullYear();
        
        after_each.call(this);
          
        if(i == data.length - 1){
          after_all.call(this); 
        }
      });
    });
 }

 // fetch popular posts
 $('div[role=popular]').each(function(){
    var that = this;

    //create a list for posts
    var posts_list = $("<ul></ul>");

    // append results to posts list
    load_posts_list('/json/popular.json', function(){
      $(posts_list).append('<li><a href="' + this.permalink + '">' + this.title + '</a><time title="' + this.date + '">' + this.formatted_date + '</time></li>');
    },
    function(){
      // remove the loading element
      $(that).find('p').remove(); 

      //append the posts list
      $(that).append(posts_list);

      //reduce list
      setTimeout(reduce_lists, 5);
    });
 });

 //make title go back to home
 $("header h1, header h2").click(function(){
    location.href = "/"; 
 });

 /* Archive page */

 var filter_by_year = function(year){
  var pushState = arguments[1];
  $("div.posts ul li").each(function(){
    if(year == "archive"){
      $(this).removeClass('hide') 
    }
    else if($(this).data('year') != parseInt(year)){
      $(this).addClass('hide'); 
    }
    else {
      $(this).removeClass('hide') 
    }
  }); 

  //push history state
  if(pushState){
    if(window.history.pushState){
      if(year == "Any"){
        history.pushState({}, "Archive", "/archive");
      }
      else {
        history.pushState({}, "Archive - " + year, "/" + year + "/");
      }
    }
  }
 };

 var filter_by_tag = function(tag){
  var pushState = arguments[1];
  var matches_tag = function(obj, tag){
     var matches = -1;
     $.each($(obj).data('tags'), function(i, v){
        if(v.toLowerCase() == tag){
          matches++;
        }  
     });
     return matches
  }
  $("div.posts ul li").each(function(){
    if(tag == "archive"){
      $(this).removeClass('hide') 
    }
    else if(matches_tag(this, tag) < 0){
      $(this).addClass('hide'); 
    }
    else {
      $(this).removeClass('hide') 
    }
  }); 

  //push history state
  if(pushState){
    if(window.history.pushState){
      if(tag == "Any"){
        history.pushState({}, "Archive", "/archive");
      }
      else {
        history.pushState({}, "Archive - " + tag, "/tag/" + tag + "/");
      }
    }
  }
 };

 var swap_filter_selector = function(selector){
  //swap links
  $(".filter_selector").removeClass('active');
  selector.addClass('active');
 };

 var load_content_by_path = function(){
   var path = document.location.pathname; 
   path_sections = path.split("/");

   if(path_sections[1] == "tag"){ 
     swap_filter_selector($("a.filter_selector[rel=tag]"));
     setFiltersBy('tag', false);
     var tag = path_sections[2].toLowerCase(); 
     $("menu.filter a[data-tag=" + tag + "]").trigger('click', [false]);
   }
   else {
     swap_filter_selector($("a.filter_selector[rel=year]"));
     setFiltersBy('year', false);
     $("menu.filter a[data-year=" + path_sections[1] + "]").trigger('click', [false]);
   }
 }

 $("a[rel=next], a[rel=prev]").click(function(){
   var selector_without_controls = ':not([role=control])';
   var filter_parent = $(this).closest('menu');
   var current_filter = filter_parent.find('a.current').parent();
   var direction = $(this).attr('rel');

   if(direction == "next"){
     var filter_to_select = current_filter.next(selector_without_controls);
   }
   else {
     var filter_to_select = current_filter.prev(selector_without_controls);
   }

   filter_to_select = ( filter_to_select.length > 0 ) ? filter_to_select : $(filter_parent.children(selector_without_controls)[0]);

   //check whether the filter to select is hidden
   if(filter_to_select.hasClass('hide')){
      //make it visible 
      filter_to_select.removeClass('hide');

      //hide the first visible selector on other end
      if(direction == "next"){
        $("ul.filters li:not(.hide, .any)").first().addClass('hide');
      }
      else {
        $("ul.filters li:not(.hide, .any)").last().addClass('hide');
      }
   }

   filter_to_select.children('a').trigger('click', [true]);
    
   return false; 
 }); 

 $('menu.filter').delegate('a[rel=filter]', 'click', function(ev, pushState){
   pushState = ( typeof(pushState) === "undefined" ) ? true : pushState;
   $(this).closest('menu').find('a').removeClass('current');
   $(this).addClass('current');

   $(this).data('year') ? filter_by_year($(this).data('year'), pushState) : filter_by_tag($(this).data('tag'), pushState)

   return false;
 });

 //switch filters
 $(".filter_selector").click(function(){

  if($(this).hasClass("active")){
    return false; 
  }

  swap_filter_selector($(this));

  //add items
  setFiltersBy($(this).attr('rel'));

  return false;
 });

 
 //on load
 if($("#archive-page").length > 0){
   var collections = {"years": [], "tags": []};

   var getTopTags = function(tags){
     //select the top 10 tags
      var tagsArray = [];
      var tagsCountArray = [];

      $.each(tags, function(tag, count){
        tagsArray.push(tag); 
        tagsCountArray.push(count);
      });

      //sort the tags count
      var topTagCounts = tagsCountArray.sort().splice(0, 10);

      //get the tags
      var topTags = $.map(topTagCounts, function(v, i){
       return tagsArray[i]  
      });

      return topTags;
   };

   var indexEntries = function(){
     //collect years and tags
     var years = [];
     var tags = {};
     var total_posts = $("div.posts li").length;

     $("div.posts li").each(function(i){
        // add years
        var year = $(this).data('year');
        if($.inArray(year, years) == -1){
          years.push(year); 
        }

        //add tags
        $.each($(this).data('tags'), function(i, tag){
          tags[tag] += (tags[tag] || 0); 
        });

        // run callbacks if this is the last entry
        if(i == (total_posts - 1)){
          collections["years"] = years;
          collections["tags"] = getTopTags(tags);
        }
     });
   };

   var setFiltersBy = function(section){
    //remove existing items
    $("menu.filter ul.filters li:not(:first-child)").remove();

    $.each(collections[section + "s"], function(){
      $("menu.filter ul.filters").append("<li><a href='#' rel='filter' data-" + section + "='" + (this + '').toLowerCase() + "'>" + this + "</a></li>");
    })

    setVisiblityOfFilters();

    //reset filters
    var reset_selection = (typeof arguments[1] === "undefined") ? true : arguments[1]; 
    if(reset_selection)
      $("menu.filter li.any a").trigger("click");

   };

   var setVisiblityOfFilters = function(){
     var available_width = $("menu.filter ul.filters").innerWidth();
     var hide_all_from_now = false;

     $("menu.filter ul.filters li").each(function(){
      var current_width = $(this).outerWidth();
      if(!hide_all_from_now && (available_width > current_width)) {
        available_width -= current_width; 
      }
      else {
        $(this).addClass('hide'); 
        hide_all_from_now = true
      }
     });
   }

   indexEntries();
   //setFiltersBy('year');
   load_content_by_path(); 

   //popstate
   window.onpopstate = load_content_by_path; 

 }


});
