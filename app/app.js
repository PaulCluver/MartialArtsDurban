(function() {

    'use strict';

    var martialArtsApp = angular.module('martialArtsApp', ['ui.router', 'mm.foundation']);

    martialArtsApp.constant('VERSION', '0.1');

    martialArtsApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html',
                controller: 'homeCtrl',
                data: {
                    pageTitle : 'Martial Arts Durban - Home',
                    description: 'Internal martial arts of Bagua Zhang, Xing Yi Chuan, Tai Ji Chuan and Muay Boran in Durban South Africa'
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact/contact.html',               
                data: {
                    pageTitle : 'Martial Arts Durban - Contact',
                    description: 'This page provides contact information on Durban Bagua Zhang Kung Fu.'
                }
            })
            .state('classes', {
                url: '/classes',
                templateUrl: 'partials/classes/classes.html',   
                controller: 'classesCtrl',            
                data: {
                    pageTitle : 'Martial Arts Durban - Classes',
                    description: 'This page provides class information for martial arts classes.'
                }
            })  
            .state('BaguaZhang', {
                url: '/BaguaZhang',
                templateUrl: 'partials/BaguaZhang/BaguaZhang.html',   
                data: {
                    pageTitle : 'Martial Arts Durban - Bagua Zhang',
                    description: 'This page provides information about the martial art of Bagua Zhang.'
                }
            })
            .state('XingYiChuan', {
                url: '/XingYiChuan',
                templateUrl: 'partials/XingYiChuan/XingYiChuan.html',   
                data: {
                    pageTitle : 'Martial Arts Durban - Xing Yi Chuan',
                    description: 'This page provides information about the martial art of Xing Yi Chuan.'
                }
            })
            .state('TaiJiChaun', {
                url: '/TaiJiChaun',
                templateUrl: 'partials/TaiJiChuan/TaiJiChuan.html',   
                data: {
                    pageTitle : 'Martial Arts Durban - Tai Ji Chuan',
                    description: 'This page provides information about the martial art of Tai Ji Chuan.'
                }
            })
            .state('MuayBoran', {
                url: '/MuayBoran',
                templateUrl: 'partials/MuayBoran/MuayBoran.html',   
                data: {
                    pageTitle : 'Martial Arts Durban - Muay Boran',
                    description: 'This page provides information about the martial art of Muay Boran.'
                }
            })

               
    });

    martialArtsApp.service('ClassesDataService', function() {
        
        this.classes = [{
            name: 'Bagua Basics',
            description: 'In this class we focus upon the basics of Bagua Zhang which include standing, striking, turning and changing.',
            day: 'Wednesday',
            time: '17:00pm - 19:00pm',
            location: 
            {
              address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }
        }, 
        {
            name: 'Weapons, Xing Yi, Tai Ji and Muay Boran',
            description: 'In this class we focus upon the weapon systems of Bagua Zhang as well as a comparitive study of Tai Ji, Xing Yi and Muay Boran.',
            day: 'Thursday',
            time: '17:00pm - 19:00pm',
            location: 
            {
                address: '58 Gordon Road',
                suburb: 'Morningside',
                city: 'Durban',
                province: 'Kwa-zulu Natal'
            }        
        }];

    });

    martialArtsApp.service('ClassesService', function(ClassesDataService) {
        
        this.getAllClasses = function() {
            return ClassesDataService.classes;
        };

    });

    martialArtsApp.service('QuotesDataService', function() {
       
        this.quotes = [{
            text: 'Everything flows, nothing stands still',
            author: 'Heraclitus of Ephesus'
        },
        {
            text: 'Practice, practice...all is coming',
            author: 'Sri K. Pattabhi Jois'
        },
        {
            text: 'It is difficult to understand the universe if you only study one planet',
            author: 'Miyamoto Musashi'
        },
        {
            text: 'Stop acting so small. You are the universe in ecstatic motion.',
            author: 'Rumi'
        },
        {
            text: 'It is better to live one day seeing the rise and fall of things than to live a hundred years without seeing anything.',
            author: 'Gautama Buddha'
        },
        {
            text: 'Everyone has been made for some particular work, and the desire for that work has been put in every heart.',
            author: 'Rumi'
        },
        {
            text: 'Everything that is made beautiful and fair and lovely is made for the eye of one who sees.',
            author: 'Rumi'
        },
        {
            text: 'Beauty surrounds us, but usually we need to be walking in a garden to know it.',
            author: 'Rumi'
        },
        {
            text: 'Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.',
            author: 'Sun Tzu'
        },
        {
            text: 'Be extremely subtle, even to the point of formlessness. Be extremely mysterious, even to the point of soundlessness. Thereby you can be the director of the opponents fate.',
            author: 'Sun Tzu'
        },
        {
            text: 'Pretend inferiority and encourage his arrogance.',
            author: 'Sun Tzu'
        },
        {
            text: 'Know thy self, know thy enemy. A thousand battles, a thousand victories.',
            author: 'Sun Tzu'
        },
        {
            text: 'He who knows when he can fight and when he cannot, will be victorious.',
            author: 'Sun Tzu'
        },
        {
            text: 'If you know the enemy and know yourself you need not fear the results of a hundred battles.',
            author: 'Sun Tzu'
        },
        {
            text: 'Life is a series of natural and spontaneous changes. Dont resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.',
            author: 'Lao Tzu'
        },
        {
            text: 'Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.',
            author: 'Lao Tzu'
        },
        {
            text: 'If you do not change direction, you may end up where you are heading.',
            author: 'Lao Tzu'
        },
        {
            text: 'To the mind that is still, the whole universe surrenders.',
            author: 'Lao Tzu'
        },
        {
            text: 'Silence is a source of great strength.',
            author: 'Lao Tzu'
        },
        {
            text: 'If you want to become full, let yourself be empty.',
            author: 'Tao Te Ching'
        },
        {
            text: 'If you want to be given everything, give everything up.',
            author: 'Tao Te Ching'
        },
        {
            text: 'When there is no desire, all things are at peace',
            author: 'Tao Te Ching'
        },
        {
            text: 'All things entail rising and falling timing. You must be able to discern this.',
            author: 'Miyamoto Musashi'
        },
        {
            text: 'Do nothing which is of no use.',
            author: 'Miyamoto Musashi'
        },
        {
            text: 'Perceive that which cannot be seen with the eye.',
            author: 'Miyamoto Musashi'
        }
        ];

    });

    martialArtsApp.service('QuotesService', function(QuotesDataService) {
        
        this.getRandomQuote = function() {
            var quotesLength = QuotesDataService.quotes.length;
            var randomItem = Math.floor((Math.random() * quotesLength));
            return QuotesDataService.quotes[randomItem];
        };

    });

    martialArtsApp.controller('appCtrl', ['$scope', function($scope) {
        
        $scope.showContactUs = function() {
            $scope.showContactUsBoolean = true;

            if (location.hash != '#/contact') {
                $scope.showContactUsBoolean = false;
            }
            return $scope.showContactUsBoolean;
        };    
        
    }]);

    martialArtsApp.controller('homeCtrl', function($scope) {
      
    });
   
    martialArtsApp.controller('classesCtrl', ['$scope', 'ClassesService', function($scope, ClassesService) {
       
        $scope.classes = ClassesService.getAllClasses();

    }]);


    martialArtsApp.directive('title', ['$rootScope', '$timeout', 'QuotesService',
    
        function($rootScope, $timeout, QuotesService) {
            return {
                
                    link: function() {

                    var listener = function(event, toState) {
                        
                        $timeout(function() {
                            $rootScope.title = (toState.data && toState.data.pageTitle) ? toState.data.pageTitle : 'Martial Arts Durban';
                            $rootScope.description = (toState.data && toState.data.description) ? toState.data.description : 'Internal martial arts in Durban, South Africa';
                            $rootScope.quotes = QuotesService.getRandomQuote();
                        });
                    };

                    $rootScope.$on('$stateChangeSuccess', listener);
                }
            };
        }

    ]);    

}());
