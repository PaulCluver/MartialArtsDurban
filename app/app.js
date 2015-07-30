(function() {

    'use strict';

    var martialArtsApp = angular.module('martialArtsApp', ['ui.router', 'mm.foundation']);

    martialArtsApp.constant('VERSION', '0.1');

    martialArtsApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html',
                data: {
                    pageTitle : 'Martial Arts Durban - Home',
                    description: 'Internal martial arts of Bagua Zhang, Xing Yi Chuan, Tai Ji Chuan and Muay Thai Boran in Durban South Africa'
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
                    description: 'This page provides class information for Bagua Zhang, Xing Yi Chuan, Tai Ji Chuan and Muay Thai Boran martial arts classes in Durban, South Africa.'
                }
            })
            .state('BaguaZhang', {
                url: '/BaguaZhang',
                templateUrl: 'partials/BaguaZhang/BaguaZhang.html',
                data: {
                    pageTitle : 'Martial Arts Durban - Bagua Zhang',
                    description: 'This page provides information about the martial art of Bagua Zhang as taught at Martial Arts Durban.'
                }
            })
            .state('XingYiChuan', {
                url: '/XingYiChuan',
                templateUrl: 'partials/XingYiChuan/XingYiChuan.html',
                data: {
                    pageTitle : 'Martial Arts Durban - Xing Yi Chuan',
                    description: 'This page provides information about the martial art of Xing Yi Chuan as taught at Martial Arts Durban.'
                }
            })
            .state('TaiJiChuan', {
                url: '/TaiJiChuan',
                templateUrl: 'partials/TaiJiChuan/TaiJiChuan.html',
                data: {
                    pageTitle : 'Martial Arts Durban - Tai Ji Chuan',
                    description: 'This page provides information about the martial art of Tai Ji Chuan as taught at Martial Arts Durban.'
                }
            })
            .state('MuayBoran', {
                url: '/MuayBoran',
                controller: 'muayBoranCtrl',
                templateUrl: 'partials/MuayBoran/MuayBoran.html',
                data: {
                    pageTitle : 'Martial Arts Durban - Muay Thai Boran',
                    description: 'This page provides information about the martial art of Muay Thai Boran as taught at Martial Arts Durban.'
                }
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });


    martialArtsApp.service('ClassesDataService', function() {

        this.classes = [{
            name: 'Xing Yi Chuan',
            description: 'In this class we focus upon the basics of Xing Yi Chuan as well as its related weapons.',
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
            name: 'Bagua Zhang',
            description: 'In this class we focus upon the basics of Bagua Zhang which include standing, striking, turning and changing. In addition, the weapon systems of Bagua Zhang will be studied.',
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

    martialArtsApp.service('MuayBoranDataService', function() {

        this.techniques = [{
            MaeMai: [
            {
                thaiName: 'Salab Fan Pla',
                englishName: 'Cross-Switch Movement',
                description: 'The name of this technique is derived from the shape made when the defender moves his left or right foot one step backwards. This is believed to resemble the shape of a fish tooth.  Salab Fan Pla is a primarily a defensive technique. As the figure illustrates, the attacker throws a punch at the defender. The defender uses the Salab Fan Pla by stepping back obliquely to avoid the fist. Following this the defender either grabs or pushes the attacker’s fist away whilst preparing for another attack. This Mae Mai is generally used to defend against punches. ',
                imgSrc: 'assets/img/salab-fan-pla.jpg'
            },
            {
                thaiName: 'Paksa Waeg Rang',
                englishName: 'Bird Peeping Through The Nest',
                description: 'The name of this technique is likened to the action of a bird trying to break into its nest. Paksa Weak Rang is a defensive Mae Mai Muay technique which can be used to defend against attempts to grab ones neck before launching the knee or entering into the clinch. As the picture illustrates, the attacker tries to grab the defenders neck before attacking with the knee. The defender then inserts both arms between the gaps between the attacker’s arms. This is followed by a knee strike. This technique can also be applied to when the attacker throws a punch. The defender can use this technique to push away the attacker’s punch and then respond with other weapons. ',
                imgSrc: 'assets/img/paksa-weak-rang.jpg'
            },
            {
                thaiName: 'Chawa Sod Hok',
                englishName: 'Javanese Throws The Spear',
                description: 'The name of this technique is likened to the action of throwing a lance. Chawa Sad Hork is a dynamic defensive technique which lets the defender avoid the attacker’s punch, whilst simultaneously attacking with the elbow. As the figure illustrates, when the attacker throws a punch the defender drops down to escape and then uses his right hand to push away the punch. This is followed up with an elbow strike. ',
                imgSrc: 'assets/img/chawa-sod-hok.jpg'
            },
            {
                thaiName: 'Inao Thang Grit',
                englishName: 'Inao Stabs His Kris',
                description: 'The name of this technique is likened to the action of stabbing a knife at an opponent. Like Chawa Sad Hork, Enow Taeng Krit is a dynamic defensive technique which lets the defender avoid the attacker’s punch, whilst simultaneously attacking with the knee. The defender slips to the right to escape the punch and then uses his both hand to push it away. This is followed by a knee strike. Alternately, the defender can strike with the elbow.',
                imgSrc: 'assets/img/inao-thang-grit.jpg'
            },
            {
                thaiName: 'Yo Khao Prasumaru',
                englishName: 'Lift Sumer Mountain',
                description: 'The name of this technique is derived from the action made when trying to lift a heavy object. In this case, the object is the attacker’s leg. Here the defender catches the kicking leg, lifts it and then throws the attacker.',
                imgSrc: 'assets/img/yo-khao-prasumaru.jpg'
            },
            {
                thaiName: 'Ta Then Kam Fak',
                englishName: 'The old man holds the melon',
                description: 'The name of this technique is likened to a person holding a melon. As the picture illustrates, the defender reacts to the attack by stepping diagonally away from the punch whilst using the right hand to push away the attacker’s punch. Simultaneously, the defender uses the left punch to strike at the attacker’s chin. ',
                imgSrc: 'assets/img/ta-then-kam-fak.jpg'
            },
            {
                thaiName: 'Mon Yan Lak Mon',
                englishName: 'The Mon presses against the pillar',
                description: 'The name of this technique is likened to the action that a person makes when thrusting his foot onto a pillar. The defender delivers a foot thrust in order to protect from attack, or to ensure that the attacker does not advance to close. This technique is exclusively used for defence. That said the full power of the foot thrust should be strong enough to injure the attacker and allow the defender to prepare for a counter attack. ',
                imgSrc: 'assets/img/mon-yan-lak.jpg'
            },
            {
                thaiName: 'Pak Look Thoy',
                englishName: 'Impaling the stake',
                description: 'The name of this technique is likened to the action of a wooden stick that is being stuck into a tree trunk. Although Pak Look Toi is a defensive technique, it is also one of the most deadly Mae Mai techniques of attack. The defender uses the elbows to block the attackers kick.',
                imgSrc: 'assets/img/pak-look-thoy.jpg'
            },
            {
                thaiName: 'Hak Nguang Aiyara',
                englishName: 'Break The Elephants Trunk',
                description: 'The name of this technique is likened to the action of a man trying to break an elephant’s trunk. Hak Nguang Aiyara is used in defence against the kick. When the attacker kicks, the defender grabs the attacker’s leg firmly and then uses the right arm to either push the leg down or elbow it.',
                imgSrc: 'assets/img/hak-nguang-aiyara.jpg'
            },
            {
                thaiName: 'Jarakhe Fad Hang',
                englishName: 'Crocodile Swings Its Tail',
                description: 'The name of this technique comes from the thrashing action that a Crocodile makes when swinging its tail. Jarakhae Fad Hang is not a defensive technique. It is typically used after a roundhouse kick to enhance the attack. One should be careful when using this technique as it forces the attacker to expose his back, making him susceptible to a vicious counter attack.',
                imgSrc: 'assets/img/jarakhe-fad-hang.jpg'
            },
            {
                thaiName: 'Naka Bid Hang',
                englishName: 'Twist the serpents tail',
                description: 'The name of this technique is likened to the action of a man trying to twist the mythical Naka’s tail. This technique has a similar objective to Hak Nguang Aiyara. The primary difference between this and Hak Nguang Aiyara is that this is a response to a foot thrust and the intention is to break the attacker’s ankle. The defender grabs the attacker’s foot and suddenly twists the ankle. He simultaneously places his foot behind the knee of the attackers supporting leg.',
                imgSrc: 'assets/img/naka-bid-hang.jpg'
            },
            {
                thaiName: 'Viroon Hok Glab',
                englishName: 'Bird Somersaults',
                description: 'The name of this technique is likened to the action of a bird quickly turning back to return to its nest. This technique is used to counter an attack by the leg. As the attacker throws the kick, the defender rolls in on the attacking leg and throws the reverse elbow. ',
                imgSrc: 'assets/img/viroon-hok-glab.jpg'
            },
            {
                thaiName: 'Dab Chawala',
                englishName: 'Extinguish The Lamps',
                description: 'The name of this technique is likened to the action of a man trying to close or shut down a lamp. Dab Chawala is used in response to a punching attack. As the picture illustrates, the attacker throws a straight punch. The defender uses the left arm to sweep away the punch and simultaneously throw a straight right to the attacker’s eye. This un-complicated technique is used to attack the vulnerable eye sockets.',
                imgSrc: 'assets/img/dab-chawala.jpg'
            },
            {
                thaiName: 'Kuanyak Chap Ling',
                englishName: 'Giant Catches The Monkey',
                description: 'The name of this technique is likened to the action of a demon trying to grab and lock the monkey’s neck. This technique is used in response to a punching attack. When the attacker tries to punch at the defenders face, the defender uses the right hand to sweep away the punch whilst simultaneously locking the attacker’s neck. ',
                imgSrc: 'assets/img/kuanyak-chap-ling.jpg'
            },
            {
                thaiName: 'Hak Kor Erawan',
                englishName: 'Break The Elephants Trunk',
                description: 'The name of this technique is likened to the action of a man trying to break the mythical elephant’s neck. This technique is used to protect the boxer from either attack by the knee or from the clinch. As the attacker tries to close in on the defender, the defender uses the right hand to push the attacker’s chin and the left to twist the neck. ',
                imgSrc: 'assets/img/hak-kor-erawan.jpg'
            }],
            LukMai: [
           {
                thaiName: 'Erawan Suey Nga',
                englishName: 'Elephant thrusts its tusks',
                description: 'The name of this technique is likened to the action of an elephant swinging up its tusks to attack. In mimicking this action, the boxer uses the upper-cut elbow to attack the chin. Erawan Soei Nga is used in response to a punching attack. As the picture illustrates, the attacker throws a straight punch. The defender raises the left arm in defence and simultaneously steps forward to attack the chin. ',
                imgSrc: 'assets/img/erawan-soei-nga.jpg'
            },
            {
                thaiName: 'Batha Loob Pak',
                englishName: 'Foot touches face',
                description: 'The name of this technique is likened to the action of a man kicking his opponents face.  This technique is used to protect the boxer from a punching attack. As the picture illustrates when the attacker punches, the defender kicks the opponent in the face.',
                imgSrc: 'assets/img/bata-loop-pak.jpg'
            },
            {
                thaiName: 'Khun Yak Pa Nang',
                englishName: 'Throwing The Man',
                description: 'The attacker throws the straight left punch and steps forwards, guarding his chin with the right fist. The defender hurries to step the right foot outside the attackers left foot, grabs the waist and throws him to the floor.',
                imgSrc: 'assets/img/khun-yak-pa-nang.jpg'
            },
            {
                thaiName: 'Prarama Nao Sorn',
                englishName: 'King Rama Pulls The Arrowstring',
                description: 'This technique is used for defence again the attackers elbow. The attacker steps forward and raises both elbows to strike on the head. The defender steps into the attack, raises the rear arm to block and counters with the opposite uppercut.',
                imgSrc: 'assets/img/pra-ram-nao-sorn.jpg'
            },
            {
                thaiName: 'Graisorn Kham Huai',
                englishName: 'Tiger crosses the Stream',
                description: 'In this technique the defender escapes from the attacking kick and throws the straight kick at the back leg. This complimentary technique is used in defence against BATA LOOB PAK. After the attacker tries to kick the chin, the defender steps backwards onto the left foot and bends his body down to escape. He then jumps in with a straight right kick to the inner thigh/knee.',
                imgSrc: 'assets/img/graisorn-khan-hua.jpg'
            },
            {
                thaiName: 'Kwang Liew Lang',
                englishName: 'Deer Looks Back',
                description: 'The name of this technique is likened to the action made when a deer turns its head to look back.  Like the sharp horns of the deer, when the boxer turns back, his legs will do damage. This technique is used by the boxer to defend against a punch by launching a reverse back kick.  As the picture illustrates, the defender responds to the attack by stepping backwards to avoid the punch. He then uses a reverse back kick to counter the attack.',
                imgSrc: 'assets/img/kwang-leaw-lang.jpg'
            },
            {
                thaiName: 'Hiran Nuan Pan Din',
                englishName: 'Giant Turning The Earth',
                description: 'The attacker launches a right kick to the defensives rib. The defender uses Pak Look Toi and rolls into Wirun Hok Klab.',
                imgSrc: 'assets/img/hiran-muan-pan-din.jpg'
            },
            {
                thaiName: 'Naga Mood Badan',
                englishName: 'Serpent Sneaks To The Ocean',
                description: 'The name of this technique is likened to the action of a man dipping his head in the water. One uses this technique to respond to a punching attack. As the picture illustrates when the attacker throws the punch from the back, the defender bends down to avoid the punch. At the same time he responds by kicking the attacker.',
                imgSrc: 'assets/img/naka-bid-hang.jpg'
            },
            {
                thaiName: 'Hanuman Thawai Waen',
                englishName: 'Hanuman Presents The Ring',
                description: 'The name of this technique is derived from the Ramayana and describes a punching attack. As the attacking punch is thrown, the defender sweeps this away with his left hand and simultaneously steps forward and uppercuts the attackers chin. It is typically performed with both hands in response to a right punch.',
                imgSrc: 'assets/img/hanuman-tawai-waen.jpg'
            },
            {
                thaiName: 'Yuan Thod Hae',
                englishName: 'Vietnamese Casts A Fishing Net',
                description: 'This movement is used for defense against the thrusting by grabbing the leg by the arm and stepping out asides then counter by kicking to the opponent’s knee-joint. The attacker walks in and thrusts with the left foot at the defensive’s abdomen. The defensive steps with the right foot obliquely out of the circle grab the leg out with the left arm. Turns the body to throw up the right foot at the knee-joint at the same time. If the attacker thrusts with the right foot, do the same as above in the go opposite directions. ',
                imgSrc: 'assets/img/yuan-thod-hae.jpg'
            },
            {
                thaiName: 'Kamae Kam Sao',
                englishName: 'Taye supports the pillar',
                description: 'The name of this technique is likened to a Cambodian person using his arm to prop up a pillar. This technique is used to protect against a punching attack. As the picture illustrates, when the attacker punches, the defender bends down to avoid the punch and simultaneously uses the palm to strike the attackers chin.',
                imgSrc: 'assets/img/kamae-kham-sao.jpg'
            },
            {
                thaiName: 'Sak Phuang Malai',
                englishName: 'Threading the garland of flowers',
                description: 'The name of this technique is likened to the action of a man placing a flower on someone’s ear. As the picture illustrates, when the attacker punches, the defender steps inside to attack the neck/ear with the elbow. ',
                imgSrc: 'assets/img/sak-puang-malai.jpg'
            },
            {
                thaiName: 'Hong Peek Hak',
                englishName: 'Swan With A Broken Wing',
                description: 'The attacker throws a straight right. The defender steps into the attack, parrying away the left fist and striking with the right elbow.',
                imgSrc: 'assets/img/hong-peek-hak.jpg'
            },
            {
                thaiName: 'Tel Kwad Larn',
                englishName: 'Monk Sweeps The Floor',
                description: 'The name of this technique is likened to the sweeping action of an abbot cleaning a pitch around a temple. This technique is used to avoid a kicking attack by striking the supporting leg. As the picture illustrates, when the attacker uses right kick to attack, the defender bends over to escape from the kick and responds by directing a sweeping kick at the attacker’s knee. ',
                imgSrc: 'assets/img/then-kwad-lan.jpg'
            },
            {
                thaiName: 'Fan Look Buab',
                englishName: 'Slicing The Cucumber',
                description: 'The name of this technique is likened to the action of a man slicing a melon. Similarly, the boxer uses an elbow strike to attack the opponent’s neck. As the picture illustrates, when the attacker performs a straight punch, the defender raise the left arm in protection and simultaneously steps in and throws a downward right elbow strike at the attacker’s neck. ',
                imgSrc: 'assets/img/faan-look-buab.jpg'
            }]
        }];

    });

    martialArtsApp.service('MuayBoranService', function(MuayBoranDataService) {

        this.getAllTechniques = function() {
            return MuayBoranDataService.techniques;
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

    martialArtsApp.controller('muayBoranCtrl', ['$scope', 'MuayBoranService', function($scope, MuayBoranService) {

        $scope.techniques = MuayBoranService.getAllTechniques();
        $scope.techniquesMaeMai = $scope.techniques[0].MaeMai;
        $scope.techniquesLukMai = $scope.techniques[0].LukMai;

    }]);

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
