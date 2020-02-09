/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/AlexNet/index.html","9a0d23d5c9e7d01e529a6ffc65f88222"],["/SSPNet/index.html","1efc250de745d9bf1c7593f36a872906"],["/TypeError-Input-b-of-MatMul-Op-has-type-int32-that-does-not-match-type-float32-of-argument-a/index.html","1d2b6add5274e75b4cc271e751e35c26"],["/a-ebook/index.html","0675f382a982ed8a2e9ab2443a28d348"],["/a-free-tuchuang-site/index.html","f3ec01562f3a6308b2cf0076e8dcf712"],["/about/index.html","ba2aca2c718e3f61c003d749f21ab1f9"],["/archives/2019/11/index.html","5a35e676a76e9f31690282088838f423"],["/archives/2019/11/page/2/index.html","dadde14309eb0089fe38f2a0e46ce5f3"],["/archives/2019/11/page/3/index.html","8f0d4fef2983ea21488e413f8a1e4620"],["/archives/2019/11/page/4/index.html","b525418ef04851732e41d0bcdadaacf2"],["/archives/2019/12/index.html","f06537d0a39b510d41ac053c6bdb06b6"],["/archives/2019/12/page/2/index.html","a0d30defeee55e8cd0308d646e325eed"],["/archives/2019/index.html","194ece7e6699d275fc3fc034d8e9e79d"],["/archives/2019/page/2/index.html","d8c1f3896b4db84e6a2e09b208c33207"],["/archives/2019/page/3/index.html","88081c9e67919b21c054118cb07a93eb"],["/archives/2019/page/4/index.html","4c0f29c3934542edd9a9b079cbf08f23"],["/archives/2019/page/5/index.html","a12c5107e081c4f1eb7c65360c93d20f"],["/archives/2019/page/6/index.html","d7bf8a064a9e080e3de70d90a2289735"],["/archives/2020/01/index.html","14bc28f7c51703d09294e4d595011edb"],["/archives/2020/02/index.html","87911502b7b442ab2aa0bc884327ba1a"],["/archives/2020/index.html","d5a4f66ad91144552934c9ffdd2e1583"],["/archives/2020/page/2/index.html","4e5d44b375c20617679bafb7cecbdaa5"],["/archives/index.html","6bbc2ee42ad89a64f4a8d7a2e1789026"],["/archives/page/2/index.html","3b8a09a38f5518b09358ca4ba3374a90"],["/archives/page/3/index.html","6865af5994227cf55e40e344aab84d7d"],["/archives/page/4/index.html","57d0aa9fbc39d9e3f2cc798390cbe73c"],["/archives/page/5/index.html","0ff1c63ce23f501b045969f2313f8885"],["/archives/page/6/index.html","8554d84c8872f6c79673a267dae7818d"],["/archives/page/7/index.html","24ab1f4422451e27de28666527b4c4a5"],["/archor-for-markdown/index.html","69448516a172eb5bb51f3e7ddb86cfff"],["/assets/algolia/algoliasearch.js","267696b2a7b1d8f76fd18ef2b7cc7d6b"],["/assets/algolia/algoliasearch.min.js","618994490d7df5a4536fab616efed951"],["/assets/algolia/algoliasearchLite.js","fb5946f3aa26b92122a4674499b328cc"],["/assets/algolia/algoliasearchLite.min.js","07f94ef8cb79a05faa7ba75f61c88b8d"],["/baidu_verify_tgcew1PmHJ.html","a2af187cfd9c6e163a86112f3241448e"],["/basic-python-knowledge/index.html","b46c9631317daf6c3b7b7146fe31f3c1"],["/books/index.html","5ce06fa09f507e678c194f06db7231c3"],["/categories/index.html","731a443e591415044deeb8d63aadc4b5"],["/change-file-name-by-python/index.html","c87c0cfc3bf25e5a7664af1ea18a7ed5"],["/cnn/index.html","8243441ff8ddd357add326c041fda6a4"],["/conclusion-hexo-1/index.html","57827bd49c0d60017ef16a7570029216"],["/config-ssh-for-github/index.html","3749910c765abd5033900d6e22b7f0ac"],["/css/index.css","760da5c6885fad22d75560a369138475"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/cv-concept-you-must-know/index.html","ccf09fed231f3858e40cdcdb35442c33"],["/dip/index.html","051bb0465f80531330dd8f70d00a7953"],["/error-by-hexo-d-person-domain/index.html","9fd6dd2b348a246d1834f4f980fc1fe7"],["/gallery/img/avatar.jpg","6b214dea62142f8fadf96d342e0e673e"],["/gallery/img/sample.jpg","b293396e7dc37fc4cc4c51d41ff56893"],["/gallery/index.html","30984606903ea74b26e25bd13e82b9e8"],["/gallery/sample/img/avatar.jpg","6b214dea62142f8fadf96d342e0e673e"],["/gallery/sample/img/s/avatar.jpg","6b214dea62142f8fadf96d342e0e673e"],["/gallery/sample/img/s/sample.jpg","b293396e7dc37fc4cc4c51d41ff56893"],["/gallery/sample/img/sample.jpg","868c059aaf23fb183783a781333497a1"],["/gallery/sample/index.html","fae27e58e1f308232fc24515c5044e8f"],["/git-error-1/index.html","22a556c8e1222673a0c2a26c3adecc81"],["/git-error-2/index.html","b397055bd1712d726cb10cc5c506a3f9"],["/git-to-github-and-coding/index.html","cf59a7ea3198f810a654b6884f1422f3"],["/github-page-speed-access/index.html","bc4ed6ed24ea1ea05fb1b5375c1c74a1"],["/github-project/index.html","7acd8d510cde1c1dd8383815aef647ac"],["/gradient-descent/index.html","f9a9df0d619f868f842bc9282b414160"],["/hello-world/index.html","e3ebb57b74708a6e769e26ae4266f78c"],["/hexo-editor/index.html","53dea5e9fd81ebaa2c483ce5566bc297"],["/hexo-for-all/index.html","8546ab75ec6c25b1dce1c492d326a0f5"],["/hexo-hot/index.html","936455206cd0d0756d2e52380b17f665"],["/hexo-search-function/index.html","10558da98b8d6aa8e925fcc98636f35c"],["/hot/index.html","d4b0c9a9cfc781b7c86ffbe51e8718a4"],["/how-to-access-google/index.html","b72c41f83938228393be19b3c9832405"],["/how-to-crack-myeclipse/index.html","dc20130b5f0890a715110e9614637341"],["/how-to-do-research/index.html","2b4d1a6ea125259af3dc9c646bae1ee3"],["/how-to-use-python-command-param/index.html","16250d61e9954c3ee039ec14e66900c2"],["/images/123.png","56c62bbed87b08e74b30e8a277289aab"],["/images/DASHENG-900x700-1.png","6407cb42bdfcb7b43d1963152f8f00b9"],["/images/DASHENG-900x700-2.png","a4854f5c8c7680100f4108bc3cb9e0a9"],["/images/DASHENG-900x700-3.png","b839fbb38bfa5a85478f9cc1380af56d"],["/images/DASHENG-900x700-4.png","6117ee75a7b8498e83d7c4fba3fc62d6"],["/images/QiangYang.jpg","754349ed099c12ff712fd393b4b10d74"],["/images/Rob Robinson.jpg","3ca999f380f0aadbfa1356fcd426529b"],["/images/WangHaifeng.jpg","176ff0336852f9cdcd42564ec3ac8422"],["/images/Zhi-Hua.jpg","266c10b305f9f1f05970012df0848908"],["/images/about_top.jpg","2519275d1c7c3a99e04d4dc678c9869b"],["/images/alipay.jpg","d0b91c722ca6cc811712fe5b6585c49c"],["/images/aminer.png","86f43083e239e02c21be4f15a0a434e7"],["/images/aomanhao.jpg","30398411ae62ebc395abd9ce54be3e10"],["/images/archive.jpg","feae9fe09991f5b375ba091043855dc9"],["/images/article/002q1Tc8zy6LhCOA0ZTfd&690.jpg","b62fb2ac389df46ea500ed1ce1c601fc"],["/images/article/002q1Tc8zy6LhDP0Lfd7b&690.jpg","6653aeef3a9c1aab75824ce21739181e"],["/images/article/002q1Tc8zy6LhDZgnKWea&690.jpg","db267e542c6556fac9194d46d8415297"],["/images/article/002q1Tc8zy6LhDsplHUce&690.jpg","3eeb1de48f910eda0c05942ad06f9cbd"],["/images/article/002q1Tc8zy6LhEhJ3bq38&690.jpg","e75c695754b2785e35631debc835d57f"],["/images/article/100685088_1.jpg","0c2b3d002024cc6f4bee15e943375440"],["/images/article/1232314fdgdfsg.png","cdf4fb63e452108015f42d47c9fe16a5"],["/images/article/1234352-0eb0f1bfd7de705b.png","e1d12eadbf53087319eacafa8739dc13"],["/images/article/1234352-3d744d9364a4ba40.png","ff27846e6d97e98ca2fa27672b3db770"],["/images/article/1234352-4029977524e3b365.png","b8bf58388f9d5f62f07e5e8c02674e3e"],["/images/article/1234352-570afdfc6fabf3b6.png","010f8fb124838ccbac14b12a79d17629"],["/images/article/1234352-57538d21dbb34e65.png","a6e9bea31c9f1061fe1d6bc832d669a1"],["/images/article/1234352-66ce0cdcef5e2686.png","cdd90d8c37bd633016b9d44d74309866"],["/images/article/1234352-6ae594f795406b8b.png","6e512364bc0b34adbe510242b8e928fd"],["/images/article/1234352-798b134107b6593d.png","d30b037520e583fc85526bdf69c38df5"],["/images/article/1234352-8b1b6f1b200fd7b5.png","e5c0f6d6bd5c3a9614d0851a41fa0ee9"],["/images/article/1234352-8ee36cc5ce832b17.png","fbd760f09bfbf4f75f7a21ab12bd0e31"],["/images/article/1234352-a56cfde25c688859.png","99efb8a6d919005b1b2059b9222d5f37"],["/images/article/1234352-abb73822fb6d2a2c.png","893ba33fcd444db7a8688e8deacb0d7a"],["/images/article/1234352-af8dd9722c762c13.png","8c2775930f20d000a378ea0b852b3c67"],["/images/article/1234352-b21bf64600c4e32f.png","220b1be0858a1a9adfe840d9eed0a317"],["/images/article/1234352-ba3da0b06da97ddb.png","e73b1f3df6cab61dd5ab1e7f59817a73"],["/images/article/1234352-bb7fa36d116fcadc.png","138ce2749798feb5d34502b15a637641"],["/images/article/1234352-becdcdfdefb4eab7.png","dc259d80414db5f60c0d08635eac83a3"],["/images/article/1234352-ccc1493848871074.png","b25ec42d2ea0ca70954d2f5ede604b31"],["/images/article/1234352-f20521a962005299.png","9aa0b92456bdc1ea0e9028144e472fc5"],["/images/article/1234562019.png","3b89fa002d7161e92ad6c8bbcd5075a2"],["/images/article/164e6856d76ff161.jpg","522ecd2256ed03a0488ef6c5d42607e6"],["/images/article/20150105213214237.png","aa13cad1d65c1f8f03119f810463a458"],["/images/article/20150105213450046.png","e13ad2cf6cfdbe2fcb146cda52aff0ba"],["/images/article/20150105213522578.png","53654aa6547e48f645d7d5c12c67fee0"],["/images/article/20160508143448263.jpg","b59b1ad8f400c5ba40c8792af23b1d2b"],["/images/article/20160508143448263.png","b59b1ad8f400c5ba40c8792af23b1d2b"],["/images/article/20161020131820060.png","ab1c9e9eceb17b9ff5125e6c09d4050d"],["/images/article/20170713162906129.png","95950329ab5777b211276568e895a0af"],["/images/article/20180422215128864.png","e5b05962fefe2fb04bc585bc5b045ee3"],["/images/article/20180422215147575.png","297d83193dd6d904d4ca8262afc916fa"],["/images/article/20180422215147575_1.png","ee4502b5de69bebdb408b42e3c26a620"],["/images/article/20180817153030153.png","abbbb19224d188b4301b4a6189ef8056"],["/images/article/20180922220708895.png","bf405390d898d3aa42da80ef9d97c9d9"],["/images/article/2019-08-05-1.54.13.png","5442e39127089f19a0182ed58e68c916"],["/images/article/2019-08-05-2.05.59.png","592af1ae5cf84aaf8ec9f94be7e41d1b"],["/images/article/20191118093651.png","de8c9a1d04a21c25973087a075ed472a"],["/images/article/20191118093842.png","edd4f1d313f2323f4f1b70758ea3b126"],["/images/article/20191118102100.png","c53e314bbbc9ebe76203e12cf7880a27"],["/images/article/20191118102814.png","aef0b06ab14763658e9a01ce8f69eae5"],["/images/article/20191118104450.png","44a1079c6272e433ddd76cdc56f5234e"],["/images/article/20191118104655.png","d09635ccc0fea722c961e69e76f3cd91"],["/images/article/20191118105240.png","3c7e7cb9fe40588b5844c5216d8ce7a2"],["/images/article/20191118150551.png","3640e73a959104b4a8b4643b2bbfd2dd"],["/images/article/20191118150631.png","06cbf2d4872248d56c85b53fd4897bf3"],["/images/article/20191118163546.png","3b7f383693a03fb15348f09158050706"],["/images/article/20191119094513.png","70468fd5c58ebc789165616d57346c90"],["/images/article/20191119145602186.jpg","2b4d307e0e0a3d50796cb8f873e61b1d"],["/images/article/20191121131613851.jpg","d227e83e4b069dd758b1e3c731d22a50"],["/images/article/20191121140526768.jpg","6982df349defd70f1d71c5ecb15a3376"],["/images/article/20191123125246.png","1a69ab907eb4a19653bb30b974ea5fd5"],["/images/article/20191123125742.png","d631fd880ad2797e6142a2bea241cc88"],["/images/article/20191123125952.png","11d3b60d9acb85e250355d377e59873c"],["/images/article/20191123130306.png","22c7c2e0b4cd096beb8cc76c2e9267e8"],["/images/article/20191123135324.png","4f612b83b25cf164a01fee574bf1db5a"],["/images/article/20191124093619.png","ba29704112113a1c9a9a60126f53a5f8"],["/images/article/20191124095621.png","8a88877d8656229511f79537abc85c9c"],["/images/article/20191124095730.png","5f5d0996e70594b5c417d596e5073993"],["/images/article/20191124100230.png","9a8b35db56dff9409e0dd67aa6b68ef5"],["/images/article/20191124130021.png","ff6e3606e9a947a2cb104e4a463ef337"],["/images/article/20191124133708.png","5dbcbf0c6ea15e848ab44682bc0d173b"],["/images/article/20191124133827.png","952d97c7e8e3af400516e9c55a450d2e"],["/images/article/20191124133950.png","8cbcc9642feef62a013a5543da0ba5a0"],["/images/article/20191124134108.png","0dc1734a66c7799ac51d5f8222d8b440"],["/images/article/20191124135009.png","bb22f765806e78a9a982d88486f3a84d"],["/images/article/20191124140031.png","092e85ee805ebcc13d913e1e591c47af"],["/images/article/20191124140201.png","565cf6ad05a15d7c15b17880e3c71445"],["/images/article/20191124141310.png","bd8474283439804c3c84048c1a86f06a"],["/images/article/20191124144844.png","42817faac98d7bdea8bd62aa08a0b87b"],["/images/article/20191124145021.png","c049e2402788b1f964d9906eb425346a"],["/images/article/20191124145215.png","12e6dee6b599a80522c31c05472acefe"],["/images/article/20191124150945.png","fae194da41fc17b12684a8e8a73b6386"],["/images/article/20191124151126.png","793b8d0159dc5085d6569a46919770e3"],["/images/article/20191124152031.png","176771b8d488934db8660106e02be9f0"],["/images/article/20191124152217.png","47fb021fd75e4281945b27b7192a951e"],["/images/article/20191124152418.png","8e558186df610a45895d89be68a53083"],["/images/article/20191124152459.png","2685a6dda349e07670899a25acbe272b"],["/images/article/20191124153208.png","1a45d1bd852f372dc896902800559ebe"],["/images/article/20191124153313.png","d47d7d6ec36674878236e481b4a2abf8"],["/images/article/20191124153349.png","82ded4372928ca173b97e36b3a4eeb50"],["/images/article/20191124153749.png","05d0992b5a440a016f42653d7d0c13e8"],["/images/article/20191125152248.png","e247546265ba21ab893a282b7f3442dc"],["/images/article/20191125152829.png","493cd5e229fcc6f01f1d56e04b0f5b65"],["/images/article/20191125224701.png","27110daf276ee26b30de6fd5d0ac1c7e"],["/images/article/20191125224800.png","a16002cf97ed1020b28fdb97d1f6ee91"],["/images/article/20191125224901.png","650473dc60ddd3a358a771fcd1dfdc04"],["/images/article/20191126125256.png","8f82cb68306e3c04b30b4f4f392b21f6"],["/images/article/20191126125421.png","4449777a4f6a82e72304b06050aaa0a7"],["/images/article/20191126125633.png","0d5df56de6895cda6d2a6ed91fd5095d"],["/images/article/20191126125913.png","ae2206dbd36e54306d930f0c86dfb03f"],["/images/article/20191126130329.png","6085995c179c18b7b7f740c7337efdfe"],["/images/article/20191126130752.png","c51546286d64fa6a8915d823e2476d99"],["/images/article/20191126130859.png","8792067358a219edbf4aaa7987f04a6e"],["/images/article/20191127131420.png","b7a7ea08865d2b9a5528c75c674aaa69"],["/images/article/20191127131913.png","14bb7647018f6ced1d57d0c918de4bf3"],["/images/article/20191127142245.png","06f884360aa1fe40ee3827bee4937581"],["/images/article/20191127142429.png","224c4e85860fcf914c420e5b22fb8384"],["/images/article/20191127142847.png","709afdc98adec4459a9247943ba04b4e"],["/images/article/20191127142947.png","d939da079982924008302dc0c3648d3a"],["/images/article/20191127144028.png","b549a0ca34eaa6ad6fb55e2b2563b362"],["/images/article/20191127152307.png","0feae4ba7e6b7bf2ceb53cd461063a38"],["/images/article/20191128161437.png","99a15da1c8cca521dc1165c1dca888a9"],["/images/article/20191128170755.png","6201e2c2213ba28b057a75654eae61d1"],["/images/article/20191128185604.png","e6da4a5c76fd5aca42e1fb573b577962"],["/images/article/20191128190218.png","9f7cc93be39cfba8e129e526be3e068f"],["/images/article/20191128190845.png","086accda197a3f6178b85fabfb855489"],["/images/article/20191128191954.png","dde041129094af667dfee729f9c313a4"],["/images/article/20191129102252.png","1de1f6e9060ee36eb23289deefd5c417"],["/images/article/20191129102455.png","6aa50d391b973c87c72a75dd3cd11372"],["/images/article/20191129102834.png","4d77d207d0e802f15f7c275517e991b4"],["/images/article/20191129103026.png","3620addf536b4f6927694e48f447460d"],["/images/article/20191207230134.png","e379f28f6835b7dd3069df67040115c3"],["/images/article/20191208232553.png","699eb4a5308ddd2cef6780d86ecc99db"],["/images/article/20191208232924.png","243538df7455faf778242b8a11d3a89a"],["/images/article/20191208233047.png","f21bfb86b7c480984986499183299c23"],["/images/article/20191219221840.png","5e0d628686355f9f880306b8ffe22741"],["/images/article/20191219221854.png","c1c9d6438f3b66b5a1b3cfadf8c582f9"],["/images/article/20191219221924.png","fa666bd770f6a452fd0baec317e270ab"],["/images/article/20191219222640.jpg","349369c762acb3fd24d8ead901aceba1"],["/images/article/20191219222640.png","5193b27d3aacd4e9c0607a0a76286a47"],["/images/article/20191226.jpg","91a0eec2ccb2a6d68b74ce09139f40b7"],["/images/article/20191226133243.png","5cc839d6babf6d740ff4c7335dce8907"],["/images/article/20191226145021.png","6b66e88a75e0504c3d3eee59bdecb506"],["/images/article/20191226145436.png","0abfdd57a186ed07ac5ac3974862b2c4"],["/images/article/20191226145543.png","68163fcf76226f563d3dcb2d7283899a"],["/images/article/20191226145626.png","c994cf931cab20631c78698e83817f41"],["/images/article/20191226150623.png","eb6e94d0b84974d8e6cfe9df165d50c0"],["/images/article/20191226151208.png","c971b475bd1322c473989c11e746be9a"],["/images/article/20191226151430.png","82e83f6a44540679280dde73be757477"],["/images/article/20191226151531.png","052a52129841d6eb8108eff9eb57133f"],["/images/article/20191226151608.png","7273275709c984dd12358940e23dab29"],["/images/article/20191226151817.png","8b4735eeddccbee070933f7a4f166554"],["/images/article/20191226152201.png","d7fa8135b5fdd42e910fe633c4831c11"],["/images/article/20191226152412.png","2342109cc395c86429e889070722b8ce"],["/images/article/20191227161328.png","9e4b51226f5008cac0d325de76289092"],["/images/article/20191227161622.png","7f857dc99ceec82825775d37192a578b"],["/images/article/20191227161656.png","774211b0357288c96665f6980f42012b"],["/images/article/20191227162724.png","682d9c0ea29da99d725030bda6d494dd"],["/images/article/20191227163618.png","380139b556e378f6490386c0576dd170"],["/images/article/20191227163848.png","e2aa26895b306c844c2456e0abdbd4f7"],["/images/article/20191227164942.png","69553c853830a17395eab53cab6c6677"],["/images/article/20191227165149.png","f112b664e76133e2c51d1795f722018d"],["/images/article/20191227165340.png","d0b64158dfac8eda11caea3e57843eb9"],["/images/article/20191227165456.png","4b34eb4bbd9edfa1b128c82f28c8e639"],["/images/article/20191227171641.png","c3b1344e3feeb52600cfb621a8ee17d1"],["/images/article/20191227171839.png","ef68bc20d964ffbdab6226a291bdf5a3"],["/images/article/20191227211521.png","828d9b682a0e56df1f822f4294272f26"],["/images/article/20191228112401.png","802686281f7299abecdeb74899c8c0ce"],["/images/article/20191228112638.png","5d18a02b1e22ce787d390b99926ef03d"],["/images/article/20191228141630.png","6122f8a86edfcc277059a10a20b52972"],["/images/article/20191228141835.png","3ef8b5211a0105a85e32a634f6b845df"],["/images/article/20200101213442.png","2559ecdafadf5c3d568d5c361ba9ba89"],["/images/article/20200101213643.png","a2f773698384ba8c7c92d05c1fe69eb9"],["/images/article/20200101213950.png","eae8a49208555713a325996b8c42465f"],["/images/article/20200123151745.jpg","04ef4d5f24a8facdb8ec7d5c7249b930"],["/images/article/20200123151823.jpg","1149a8be462b51828ea6ebfb7020ab4a"],["/images/article/20200123151833.jpg","7be6fd3fa9bf3c21e4b3ccf7a2140f2f"],["/images/article/20200123151841.jpg","f80c4e9e8302066d0dab167ee5f7736c"],["/images/article/20200131134502.png","830929a7a655dba43b965e76f6d78375"],["/images/article/20200131140435.png","1ff6797a7ace008d2b287a3ea26dee84"],["/images/article/20200131141213.png","190d140bb9fe7d0eab7a5bb74f0d7998"],["/images/article/20200131141641.png","b77c6269ef24c4939c65f43e87871c22"],["/images/article/20200204201928.png","6e0099a139e20c16ddc4d13d9def9912"],["/images/article/20200204202014.png","aef01f7f33cba25971f5a1a02bb7ba9d"],["/images/article/20200204202037.png","c94382ad65baa8b2e917f21daa6ba5cc"],["/images/article/20200204202100.png","a5f2a4150f6e780fe0d3e447a13874ab"],["/images/article/20200204202121.png","df44c8e8d017195798407da345b46294"],["/images/article/20200204202142.png","4ef00940b16d4774fce8951da63fdcb9"],["/images/article/29381f30e924b8994bb77cac64061d950b7bf69f.png","5d59936a0568b93d8ad58df9c953c467"],["/images/article/39a9707f892b4d39811a2d3ad0c67ff2.jpg","72e77355f17f48bba4e16ab025204da5"],["/images/article/48540923dd54564e223d3494bdde9c82d0584fc7.jpg","18fba6100553ea8c396abe3dc19297f7"],["/images/article/5366d0160924ab188eed6a943dfae6cd7a890b9d.png","5b98add4c24a081ef80b110641aa3a5e"],["/images/article/5494434-5949697f2f2ba48c.png","4b0181275b42df5bd4f6449088276126"],["/images/article/6f42d391efe1d98e9ccf32f0d0df5d22.jpg","6567e489cb388cd3f7c9f18befc59d62"],["/images/article/AlexNet.png","b4a1eeee2a411fbfba56d18f6d2fc92c"],["/images/article/Pooling_schematic.gif","15e89ec6a866be1f7130655527079786"],["/images/article/a092b9b850de4c53b02762f057a8554d.jpg","f43c5b40db6cd47dc6c9b855d0c41dac"],["/images/article/a50f4bfbfbedab645ccff490fe36afc379311e24.png","ed48f7a8f3fa97c92f53439fdbca6786"],["/images/article/asdfadsfs.jpg","8dd6f2e81b360f022fb0dfaf9d6e8612"],["/images/article/asdfsdaffasdf.jpg","5a2befe3e3dd6c53d39bd9b48a253261"],["/images/article/book/20191120225804.png","62619e8ff182b8722a0bf98269ebbb1a"],["/images/article/book/critical_thinking.jpg","ae25be016b0d33df0b2f0e04e14a574c"],["/images/article/c8d9b766ly1fhuyb90f4sj20c809ddgq.jpg","8d5a903604b87d6288ab56224aa2bd02"],["/images/article/c9fcc3cec3fdfc03f23fbf16d73f8794a5c226dc.jpg","1a9545c5e3c34b53dadb104d64b61184"],["/images/article/c9fcc3cec3fdfc03f23fbf16d73f8794a5c226dc.png","1a9545c5e3c34b53dadb104d64b61184"],["/images/article/cv.jpg","d211d13615af5257c75eb18cb6190c7d"],["/images/article/d62a6059252dd42af3835f580f3b5bb5c8eab8bf.jpg","5a2befe3e3dd6c53d39bd9b48a253261"],["/images/article/d788d43f8794a4c25b5e4dd902f41bd5ac6e39c6.jpg","fbfb1672d00a5164a4a5642fc6d76e76"],["/images/article/d788d43f8794a4c25b5e4dd902f41bd5ac6e39c6.png","de28d545c1f7761265ef53c8a9462bfb"],["/images/article/deep_learning_object_detection_history.png","14936dc16f5502ad35f0d5703655341c"],["/images/article/dfbsdfgsdfg.png","e00783f85587560ec5d5b0dd3d34cd48"],["/images/article/dip.png","c1327707b3415cd89ff8ce8b7b110b76"],["/images/article/f7a1b6fb61ac06631d5b8e0d9d8c2868_1200x500.jpg","2ef8afcfc9b2074241bb1f0ef75dbf23"],["/images/article/framework.png","ea983d238d27ed6eaf0941a1f6df1a6b"],["/images/article/github_coding.jpg","3aeae25316a9688ee7f5a5bb34c8a8dc"],["/images/article/hello_world.jpg","ec968fc129f2afd5c8251cd61255f7b5"],["/images/article/hexo.jpg","1049a4903e1f46250508bb07bf6b9443"],["/images/article/json.jpg","f9d2c3c60feeff9638c335ab10b61170"],["/images/article/main.png","871fc46960b25f98529ecec229477ec4"],["/images/article/master.jpg","7a77ba9335c01afe8b20a20783a48bc1"],["/images/article/maxresdefault.jpg","377e30a1b3a2d86cff1fb7b0ff424c8d"],["/images/article/md.jpg","c692c9257023a4a92212c189050525e9"],["/images/article/movie/joker.png","c33bd7f94bb49e358e9512c8fcf4442f"],["/images/article/neteasy.jpg","fe037d0506a2c8248cac1a1f4c157cdb"],["/images/article/npm.png","a4c978712c843c579ab04ee2bde8a07c"],["/images/article/number1.png","376652d437783b0b9c51dece1c930871"],["/images/article/o_1911140113383940902-7569280b566d0e58.png","cbccf37389ab3e5ec776f97ec63c937d"],["/images/article/o_191114110431111.png","2f8f77726ad690f5f4946429e415a19b"],["/images/article/pIYBAFregg-AEan1AAMj4rvJat4359.png","f2855a98b875ab3ec8e16ecf6c6d4e72"],["/images/article/pIYBAFregg2ATy5SAAEQUsv9WF8019.png","49467637b2564b82a7b4c2e277d46b5e"],["/images/article/pIYBAFreggeAJhflAACFamG9M3o011.png","b2baf2b3966ab1f4f994ee8dd0c90bac"],["/images/article/pIYBAFreggiAC8-aAACAg54bzYo475.png","591b04bc71420eab0268db8a912b11dd"],["/images/article/pIYBAFreggiATHJ7AAEstloH4_M280.png","32a10a2148687b52b2b83e244ee482d8"],["/images/article/pIYBAFreggiAVJYtAAEv0s5MlhM898.png","510c5951e5342076c102b47ce8aa6cac"],["/images/article/pIYBAFreggqAMAUIAAAur4t_qLQ857.png","b198c23b37fce96bf693270d77521e78"],["/images/article/pIYBAFreggqAPt54AAAfaKfUS8U979.png","2546ab5a28825e17dd1fa83e6ef73c87"],["/images/article/pIYBAFreggqAUl7yAACokZwIXaM214.png","0dfcec9fd7559ffd22fcf5e4425ee54a"],["/images/article/pIYBAFreggqAbb1DAABnl3M4AWY167.png","ca1a9c437fdf0c142509450bd21cf5ec"],["/images/article/pIYBAFregguAJvoGAAATqFaF_Pk601.png","c16b3ccfacbb351327469c1df426385e"],["/images/article/pIYBAFreggyACO9FAABorvOb-GE402.png","a1fe536d6a203e5cbcaa3ae361b791be"],["/images/article/pIYBAFreggyAFTuVAAEZZ59r0Cs173.png","1d21e63b7e1973db536c5b530be76d5f"],["/images/article/pIYBAFreggyAVvcCAACg_W9CZgQ877.png","7410713f44ce2d3c1e8781f6fa46c1bc"],["/images/article/pIYBAFreggyAWtpLAADAYQTV2bk952.png","9a0da2ffa5baf171ee65857c4da8230d"],["/images/article/py.jpg","7835172990d14c0575ba0cf75a7e37ff"],["/images/article/redirecting.jpg","7830c68f085c0b0fe33b77c8bf4a16ed"],["/images/article/side-menu.png","530b1a269bf9042cf75b42c5ab62c615"],["/images/article/sloved.jpg","6c272f6470a98eca718c2fd550bbd804"],["/images/article/sql_server.jpg","70ddec1ef4b5e8b3c40323fab8eb6d2b"],["/images/article/tf.jpg","0636e2f37ab39f1855876aef38a9381a"],["/images/article/timg.jpg","bdf58f0d1120b08cd9a4d54481852d11"],["/images/article/u=1235044799,3526385205&fm=26&gp=0.jpg","3683fb2db4672c8fc119e736dcb1834a"],["/images/article/u=1838553884,3059238991&fm=26&gp=0.jpg","344b89c84991d1e0a458644b5c405157"],["/images/article/v2-44ebfe62924ac8f813fa9723d27e4d2c_1200x500.jpg","c2456a56453f204107d0836ecfed8111"],["/images/article/zhizhizhi_1bb6y-2-672x448.jpg","cd4743146a1704d202d7830d020be1e6"],["/images/arxiv.png","86eca63cf4764eaff9ee2ab0c5fbdd98"],["/images/author.jpg","fb687c5f1fa8137972802427d2e51523"],["/images/avatar.jpg","6b214dea62142f8fadf96d342e0e673e"],["/images/books_top.jpg","2b3142da7abd31294021f6224335d011"],["/images/category_top.jpg","6e57605d01ac89b22e4c164bc6fce058"],["/images/ccf.png","4a26a4d85f430490011408c650e3bc70"],["/images/cdblp.png","bb9463bff13489fa60583342b536afaa"],["/images/ckcest_home.png","6fd768068fc3bebf1c28b4df4a8b0ac0"],["/images/cnki.png","831bb0b58262a97544dd2272e336fe22"],["/images/cover-1.jpg","103035c2ad4978510dc3e36ccb06f965"],["/images/cover-2.jpg","5373bb015bd05f0efa703d385cf6843f"],["/images/cover-3.jpg","189b4748f3127d982242cd006038d19a"],["/images/cover-4.jpg","45e152dd491d10242885acfdd63a792a"],["/images/dblp.png","82804e0dfe5de958057af8e92dd7f94e"],["/images/ei_w.png","825b840a33fdbb6416870ac25c00ace1"],["/images/favicon_64 - 副本.jpg","3840f0a636a866b295ba05e478b7a69f"],["/images/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/images/huiyi.png","10f67c767d23919f93da4a66463f5eb6"],["/images/link_top.jpg","0d5b0b89ff890de1b923b8a8cff7daa7"],["/images/liziqing.jpg","3c295289fd7380d5b8eae6718aa7974a"],["/images/lujiwen.jpg","043998d51f77b1268004637793e27b70"],["/images/movie_top.jpg","164c73849f7c2e106310c528915cd6ca"],["/images/music_top.jpg","7ea9eef836a3c47e75ad46bc693be209"],["/images/mywechat.jpg","ae01e23f58a7421cb2d7efbe07aeaa4e"],["/images/p.jpg","cc8d73b0c8944b511fbc6f1870c21344"],["/images/photo_top.jpg","3b6699c9dbe15f154272be89863b32b4"],["/images/sci.jpg","8b7275d35187aa2745cdaf90e94ca3c8"],["/images/sci_hub.png","75c48f7541cc5922b53280ae826622aa"],["/images/sciencedirect.png","d597511b7284596935b93dad026d272b"],["/images/sciencenet.png","28c025558ae7ee47065c17c6d8649049"],["/images/tag.jpg","21635924b9b4cc015bff7b326b9a4398"],["/images/tag_bg.jpg","33e021e4e4f2442a332e014e5a34ecbd"],["/images/tag_top.jpg","28c40e0cc6c35c269967587092f990e0"],["/images/tianliqin.jpg","bed8ca60db429c1fc2ab9d207420bce7"],["/images/timg.jpg","bdf58f0d1120b08cd9a4d54481852d11"],["/images/top.jpg","7703b36357f424bbae870e88f1547e15"],["/images/wechataccount.jpg","a494546232b376c5b214581246071be6"],["/images/wechatpay.jpg","61cb490354ba7f193c329a7500e2fbfe"],["/images/微信图片_20191223173808.png","045c7242d79c25b875df664ab08e73c8"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","cdbf0eb347f8605cc3f403922ff12afd"],["/java-abstract-interface/index.html","7382295a58209d20aae28d3c140f75f2"],["/java-class-base-datatype/index.html","088b3b54fc5ab24412b047c3f91ff5c7"],["/java-string-stringbuffer-builder/index.html","13513b2bf5fea2bf2766cc5c70c26850"],["/js/baidupush.js","be25421879d3eb443f2ae93dcb46644e"],["/js/main.js","4ea4b89d63e2f123ca038d2d8229e168"],["/js/runtimeshow.js","07938b796b686b5c5845f398a7c2fc7d"],["/js/search/algolia.js","1af6d0127fc5e7a0e5cb3507d56fb1f9"],["/js/search/local-search.js","8ab1d8161dc54159c5be826308057318"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","a677aaed28123b70b640297be29f2750"],["/js/third-party/anime.min.js","94059f5c0365869526826941ff53445f"],["/js/third-party/canvas-nest.js","1cb48fb0ef3a385189b87c27a87c8ed5"],["/js/third-party/canvas-ribbon.js","7d36cac2647b6d96981eee999e99cb6c"],["/js/third-party/click_heart.js","bc0edf8a790d216a0284f8e442017cd8"],["/js/third-party/fireworks.js","8ad5d796e461b063ae83a2d3b663a07a"],["/js/third-party/jquery.fancybox.min.js","44e486cc12350d5ebb073a1a68c174d3"],["/js/third-party/jquery.min.js","4a55bff540a905490139495d74253ef3"],["/js/third-party/piao.js","4bdc4a6dac9b158b018b59dc90a4d8cb"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","f764476e2e6c791ef2e0970eff5f4a1f"],["/liner-regression-writen-by-tensorflow/index.html","ec00a7d053df5fb0ed4ea8bddcc05812"],["/link/index.html","44f264af88ec5dfef4c5eabbc08966e8"],["/live2dw/lib/L2Dwidget.0.min.js","2735d00cdd9b52a2b50185083f545a6e"],["/live2dw/lib/L2Dwidget.min.js","34d7885b927b08f5ac22afc3ac01443e"],["/lrn/index.html","1c8c76fc5ea12381e2d27a30a16624fc"],["/machine-learning-different-from-deep-learning/index.html","fa0d29a9647032772631691eefb60008"],["/markdownPad2-break/index.html","b7f49c4910bb4c118111c69d4e7d54a4"],["/movies/index.html","07f58eaeb04e68b9d40cbbf7f6e3ec70"],["/music-test/index.html","803b76c0e7bb86fc22c97960756603e2"],["/music/index.html","3077cf872803dd06c74fa056ce61125b"],["/mysql-to-another-disk/index.html","fd457772f1f97eb699f25da8078a2ced"],["/note-master-1/index.html","232954a242f559ccfd579cce3d7565fa"],["/npm-npmr-content/index.html","bdce2ea57b5293b31ce31fff929ba6a0"],["/page/2/index.html","189acee9a3ac1202f1c452425a08d50e"],["/page/3/index.html","bde3e7607592316b7248bcaf6bdabdb9"],["/page/4/index.html","3294b9aa1ef27df7557e1af7c78221f8"],["/page/5/index.html","1c6fdd679ae6bc37d8415c9a118b228f"],["/page/6/index.html","e2e956ab2b7853b89ffbc62a9ea1f3d0"],["/page/7/index.html","338eb01183600248c834abf6f256b33b"],["/personal-domain-for-github-page/index.html","f2e0ed6db64c14285aa35d4d6477e307"],["/photo/index.html","673f188c0f34171f08661a300d774544"],["/pug-how-to-add-google-ad/index.html","30ee7a0e1270008b2ab5e0951484fba4"],["/put-your-hexo-blog-to-baidu-sitmap/index.html","98817d8db670fa53ac85ed3b384cad96"],["/python-debug/index.html","815a4279d88a535e7245349aa964dfd5"],["/python-json-problem-sloved/index.html","e2478fc7126a89c2848241e332da7157"],["/python-logging-error-sloved/index.html","b62c8773dfd26cd862383ca58c795804"],["/python-spider-crawl-fund-data/index.html","76a3faef4bc204840c7a079db98944d0"],["/qing-yu-nian-resource/index.html","b7a27fe1c930e6c9e32b790b898106f6"],["/re-sub/index.html","3ac59d2b61018697273989fc09329133"],["/redirecting-forword/index.html","d8c16244a21a86d234cd323fe31df442"],["/sava-our-life/index.html","3dd32e78f73a38817cc84975b861ac48"],["/sloved-hexo-title/index.html","fa0c1d978782779f2f74753a739c9f77"],["/sql-server-download/index.html","e03274cb4e3cbfa953661742f6608367"],["/sql-server-reback-data/index.html","63773253d9ab6358888220deb86f65b7"],["/sql-server-something/index.html","4acbfdafa45ed4cde2cfa2407058ffa4"],["/ssh-connect-to-github/index.html","20d6cec147192ce5ae682efd2eb5e87e"],["/sw-register.js","2f8757cc7febb396af519fe304fbd6f0"],["/tags/CNN/index.html","8c6f4e027f7916ed6001e7555f9fca24"],["/tags/CVISION/index.html","ac272e85189ccafd6fa645fce1d6fda2"],["/tags/Conclusion/index.html","b6c8a08492dc57bfc7cba30b6f002008"],["/tags/DIP/index.html","6a0dfa74a179c5f6097e1f4eaef01290"],["/tags/DLEARNING/index.html","46cb4d2a88593fdadf529ddb6b2f5421"],["/tags/FKNOWLEDGE/index.html","283d76ed5d4894a0e7c49190948f553a"],["/tags/GitHub/index.html","d81fd5eab9d62a26f0eed52b4b3ddbdd"],["/tags/Java/index.html","655c1833aee4fee9c63becd46edbb448"],["/tags/LSearch/index.html","89a456b3eceda9e5456251f5db26897c"],["/tags/MLEARNING/index.html","bf0f1139c1e060e6d2e96c0f026551bf"],["/tags/Markdown/index.html","81277c0852234079c5252a37c4bbfd81"],["/tags/MySQL/index.html","dace8d17be2f873308a8a682f58bc25b"],["/tags/NNETWORK/index.html","fa33879754028fd071b83f628d39c63e"],["/tags/ODECTION/index.html","9373a160ae18eb0c06794dbabfa5110d"],["/tags/PFRAMEWORK/index.html","ca9a341469829c5b25f48ca6f84ab38d"],["/tags/PSolved/index.html","4f3313cb71373ae369a69a0bdb973795"],["/tags/PSolved/page/2/index.html","2001012480453d08fa7108b5062b7045"],["/tags/PlayBoy/index.html","e07cb4656497e12f3bfcf02e9b50b251"],["/tags/Python/index.html","d734fb57f8fddacc73322b8dc7ca8636"],["/tags/TensorFlow/index.html","174bbac9531100b5f7f7f242b0a1fa0e"],["/tags/Windows/index.html","b497acdf043af4762551583355b7ce98"],["/tags/hexo/index.html","a012fcd991efe947e4366509af339384"],["/tags/hexo/page/2/index.html","9e1324a348bfb9fb1731b52c1f81c04e"],["/tags/index.html","61b6be813c399a82b5b3fed444c57617"],["/tags/movie/index.html","6803f5b5bbbd705d8a5441384f65990a"],["/tags/music/index.html","5eb2db82e6ed6c6745cf79c19e00c2b7"],["/tags/plan/index.html","8e356ddbb6c19beed2a9a5a253aec4ee"],["/tags/sql-server/index.html","2e236c125945d8d088534aa53c3b2993"],["/tags/summary/index.html","e8e0330d5cd9bbaec81c640c2d1d96ab"],["/tags/个人观点/index.html","7a0b4a3e6b5fcfc66c18050b79086939"],["/tags/名词解释/index.html","db81761498e8d8d2d3a2ce3335830751"],["/tags/学术/index.html","8cbb6db94b7494de449b3b740d03a0f9"],["/tags/影视/index.html","085ec8a7233eb397fb375bd7630acfdb"],["/tags/数据库/index.html","4c436aa21161bd95149db2a4289f815b"],["/tags/概念解释/index.html","ac846ea74c18fca3551a4b37e4f51b5e"],["/tags/破解软件/index.html","30da026e58c3f9a6bdd1abeebd7f95b9"],["/tags/编程语言/index.html","a14a2af26a0eafd8557f850a5f7cd099"],["/tags/航拍识别/index.html","a8b29eda508ddf3ed6ca20ea701a035f"],["/tags/解决方案/index.html","04566faddb8af30bed64a3f379fd5c76"],["/tags/论文笔记/index.html","50bacc1009f146373f3b23915e3fe8ff"],["/tags/读书分享/index.html","ece077fcc4e52fe09256d43fb3820db3"],["/tags/软件下载/index.html","ec8854410ac2358b20307832677d6e66"],["/tags/软件破解/index.html","1344a7a31377237a77a02bd6d4fd8b33"],["/tags/问题解决/index.html","64b73eaaae6a4ec6e25cb2c33458ad0f"],["/tensorflow-learning-note/index.html","46a380a4016a9d0d4cad91e84f1ad729"],["/tensorflow-log-level/index.html","e2cccf260a4e01efaedb2633e54dc8a1"],["/tensorflow-mnist-full-connection/index.html","c7ccf10d3e8eba27ebaa928a72a2b04c"],["/tensorflow-reduce-mean/index.html","a57abddaf6ebaf17f229a1da50ed8882"],["/use-cloudfree-make-your-hexo-to-https/index.html","eda9b305a5f30f54fb50c7d01b338096"],["/video-1/index.html","d579b0978150dadb7281c4e1ebec81e1"],["/view-package-of-npm/index.html","e44db221f7e535512bd22c10e5ebd378"],["/your-plan/index.html","84ff16c98b36c5e86e707ce97b5f66ca"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
