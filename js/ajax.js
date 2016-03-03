
        $(document)
            .ready(function() {
            // fix menu when passed
            $('.masthead')
                .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade down');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade down');
                }
                })
            ;
            var body = $("html, body");
            
            $('.menu a:not(.toc)').click(function(){
                console.log($(this).attr('target'))
                body.stop().animate({scrollTop:$($(this).attr('target')).position().top}, 'slow', 'swing', function() { 
                });
            })
            
            $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
                $('.segment').each(function(i) {
                    if ($(this).position().top <= windscroll + 100) {
                        var index = i+ 1;
                        $('.menu a.active').removeClass('active');
                        $('.menu a:nth-child(' +  index + ')').addClass('active');
                    }
                });
                })
            
            // create sidebar and attach to menu open
            $('.ui.sidebar')
                .sidebar('attach events', '.toc.item')
            ;
            $('.ui.sidebar')
                .sidebar('attach events', '.sidebar.menu a')
            ;
            })
            
            $.ajax( "https://api.github.com/users/kkarich/repos" )
                .done(function(projects) {
                    console.log( "success",projects );
                    for(var i in projects){
                        var project = projects[i];
                        
                       $( "#projects .cards" ).append( 
                           `<div class="card">
                                <div class="image">
                                    <img src="http://semantic-ui.com/images/wireframe/image.png">
                                </div>
                                <div class="content">
                                    <div class="header">` + project.name +  `</div>
                                    <div class="meta">
                                        ` + project.updated_at +  `
                                    </div>
                                    <div class="description">
                                        ` + project.description +  `
                                    </div>
                                </div>
                            </div>
                `);
                        
                    }
                })
                .fail(function() {
                    alert( "error" );
                })
                
                
            $.ajax( "https://api.github.com/users/kkarich" )
                .done(function(user) {
                    console.log( "success",user );
                    
                    
                })
                .fail(function() {
                    alert( "error" );
                })
  ;