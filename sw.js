/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/AlexNet/index.html","3d7d20cf915186997d86925efa634d20"],["/SSPNet/index.html","391e782e38574ecc13430a9a0e04937e"],["/TypeError-Input-b-of-MatMul-Op-has-type-int32-that-does-not-match-type-float32-of-argument-a/index.html","981899f58dc85d924a08398070be11da"],["/UnicodeDecodeError-gb2312/index.html","cd523f4c1ab21be55c711047b665f3b0"],["/a-ebook/index.html","48fd66fd8560dd2db182c1ca2e2674b0"],["/a-free-tuchuang-site/index.html","9f4e848646c934e55033d06aaab70d70"],["/about/index.html","899a8959704746ab432d44e5014bc64e"],["/archives/2019/11/index.html","ccad749f77efa26be102d1d1ef3382ae"],["/archives/2019/11/page/2/index.html","8ab58c17d0f960f80fcff3b7ef8203dd"],["/archives/2019/11/page/3/index.html","8875e2cf8cb7602ab41621746b2c23de"],["/archives/2019/11/page/4/index.html","9b765b395f73eaaff10ab1758f518f08"],["/archives/2019/12/index.html","e0903995a9737ecc411f7b32d5b4ad34"],["/archives/2019/12/page/2/index.html","81c23c113918854847af0b204cd110be"],["/archives/2019/index.html","536ad8635df683ea95392dd31a410263"],["/archives/2019/page/2/index.html","9cd23e9b22665a390bba465707d53596"],["/archives/2019/page/3/index.html","257fdca3f503e122a8f09831a8e2e808"],["/archives/2019/page/4/index.html","e5cff903632d6be9b3078e4a3ac97cfd"],["/archives/2019/page/5/index.html","c45b06e5a6860a731463a484fcc67537"],["/archives/2020/01/index.html","6a5eb638856fd8843c3227e1ae675825"],["/archives/2020/02/index.html","ea15b054f45b91e4880384750c6d7883"],["/archives/2020/02/page/2/index.html","dc50fd24a17e5acfa219b9ac06514012"],["/archives/2020/03/index.html","8089731d779cd9a362bc8d29839c4e5e"],["/archives/2020/03/page/2/index.html","552236ffd28ae081eb08958ea576aee5"],["/archives/2020/index.html","1e101d4e53d4908c43e8693899fd7d39"],["/archives/2020/page/2/index.html","13f1190fc3a3c89874955ff3d69f353c"],["/archives/2020/page/3/index.html","6e06a5620900c09c9c95802f4468152d"],["/archives/2020/page/4/index.html","70b7f443763e073166f27cbbbd71bfaf"],["/archives/index.html","d30e6839cedc83139b21c6fe24300d49"],["/archives/page/2/index.html","7d81b767eba03b7d36a59955f52cd4eb"],["/archives/page/3/index.html","b2223601169c5d1c4cc76f7b2a1452de"],["/archives/page/4/index.html","4763a7bf3903f7ca527ea2a060556741"],["/archives/page/5/index.html","dd8f868bb7bc94075b2a17ba46b42158"],["/archives/page/6/index.html","9459d0afe37b1af622fc88234615969b"],["/archives/page/7/index.html","7b4e95cec03122e37cfb03269a9ec709"],["/archives/page/8/index.html","5e652a90fb2d28337d407cdf91996847"],["/archives/page/9/index.html","87883385ffbd079dcbd8cf757178b957"],["/archor-for-markdown/index.html","86461a40a0c97b03452b52ecf6c94ed2"],["/assets/algolia/algoliasearch.js","267696b2a7b1d8f76fd18ef2b7cc7d6b"],["/assets/algolia/algoliasearch.min.js","618994490d7df5a4536fab616efed951"],["/assets/algolia/algoliasearchLite.js","fb5946f3aa26b92122a4674499b328cc"],["/assets/algolia/algoliasearchLite.min.js","07f94ef8cb79a05faa7ba75f61c88b8d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","b1dda9770d133ab689a18dfb533c00ae"],["/assets/js/Meting.min.js","debe95fd33559f7950f93d53e1f7d0a1"],["/awesome-spider-project/index.html","91cfcd8941518d48a3a84a82aafbd46e"],["/baidu_verify_tgcew1PmHJ.html","f29d0af440f173ec98b06ee6259a945e"],["/basic-python-knowledge/index.html","251830cd97dbb3df547cb0388d43f365"],["/books/index.html","41e95586e1ef5feea54b564bec8c1cc6"],["/categories/index.html","2e152f6771fd1aae4038b1848dcd5e65"],["/cdn-speed-up/index.html","a10cc2ab73ba4aa38bb830d2150ac282"],["/change-file-name-by-python/index.html","0645422c90a647f1720925da2059bd78"],["/cnn/index.html","79bb9c433e97a8427320036c58878a8d"],["/comments/index.html","73f939acad1e9a9cbf5f431447d84b77"],["/computer-around-ebook/index.html","aa1ef4b8e6f81626abb788ea8c2b97d1"],["/conclusion-hexo-1/index.html","c7e87dc89a5e5537eff8753284356700"],["/config-ssh-for-github/index.html","7463aa67bc706bb918efaeedffb93c54"],["/crawl-photo/index.html","be551e11680ad34a49434591a157a9ee"],["/css/index.css","760da5c6885fad22d75560a369138475"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/cv-concept-you-must-know/index.html","e3a2ff5c71eeec2ded2b2c2370ff6a02"],["/dip/index.html","e9e493eb4ff2d14c46bbaf179ffc9514"],["/error-by-hexo-d-person-domain/index.html","1f56a3977c6967ec3c9ef8f5f1b6a58d"],["/fatal-remote-origin-already-exists/index.html","2a15f6f8ca49bd9a8ea5f9d0b7b0dee0"],["/gallery/img/avatar.jpg","6b214dea62142f8fadf96d342e0e673e"],["/gallery/img/sample.jpg","b293396e7dc37fc4cc4c51d41ff56893"],["/gallery/index.html","507203cdcb56de42300c695de445fb1c"],["/gallery/sample/img/avatar.jpg","6b214dea62142f8fadf96d342e0e673e"],["/gallery/sample/img/s/avatar.jpg","6b214dea62142f8fadf96d342e0e673e"],["/gallery/sample/img/s/sample.jpg","b293396e7dc37fc4cc4c51d41ff56893"],["/gallery/sample/img/sample.jpg","868c059aaf23fb183783a781333497a1"],["/gallery/sample/index.html","8380b13f3a41c2e77102d0b44032ec74"],["/git-connect-to-github/index.html","ee071a30ce0f13c39725502519dfcde4"],["/git-delete-file-s/index.html","fb8c06a77fdbed2e935e1f3880b35be0"],["/git-error-1/index.html","6c5f35d103ca16f6927af8498b692170"],["/git-error-2/index.html","b68ff6e3437d4d7b6578b2e3848b7eb6"],["/git-push-error/index.html","ea4cc002656e3a8c9396d9f454ddf3e8"],["/git-to-github-and-coding/index.html","321340f4673063d72528aea6cf7c7c0b"],["/github-how-to-create-two-more-page/index.html","7d6e070ee5a2ca25e638900755f8f35b"],["/github-page-speed-access/index.html","f39c46bf0e02ce0580ade5a73c2dcb2b"],["/github-project/index.html","e9dbe3b42921fb588fe37fa737241b3a"],["/gradient-descent/index.html","48150a40ecca5a0865a66f66d8874164"],["/hexo-editor/index.html","99ed998b8dc123614a0d398449d841cb"],["/hexo-for-all/index.html","95d4c1af17d25a829943b7478832acf6"],["/hexo-hot/index.html","7c757d9647bb03b0185ef4ca76d53b7b"],["/hexo-search-function/index.html","93c4ab3520d464a1fa5ddb9e0c36c759"],["/hot/index.html","6734fe0869cdba6e4efafb047a460dbb"],["/how-to-access-google/index.html","144713f0fbd6b11d04957199b2a492ca"],["/how-to-crack-myeclipse/index.html","3efb42658ca21075706297ca97979e11"],["/how-to-do-research/index.html","99c031eb33f39acd6f2712790936778d"],["/how-to-use-git/index.html","7d5f98218fe279608f85fc472a44db4e"],["/how-to-use-github-API/index.html","6940ff56c9232d9feb3c98a6e3c2b5de"],["/how-to-use-python-command-param/index.html","a11838b49e9190ae8894179ef7a1d337"],["/how-to-use-setuptools/index.html","272d48e5cb2c98209dd989efd8d33a5a"],["/how-to-write-a-document-for-your-project/index.html","9bc095516e49955e2c7d4bd139070fbc"],["/images/123.png","56c62bbed87b08e74b30e8a277289aab"],["/images/DASHENG-900x700-1.png","6407cb42bdfcb7b43d1963152f8f00b9"],["/images/DASHENG-900x700-2.png","a4854f5c8c7680100f4108bc3cb9e0a9"],["/images/DASHENG-900x700-3.png","b839fbb38bfa5a85478f9cc1380af56d"],["/images/DASHENG-900x700-4.png","6117ee75a7b8498e83d7c4fba3fc62d6"],["/images/QiangYang.jpg","754349ed099c12ff712fd393b4b10d74"],["/images/Rob Robinson.jpg","3ca999f380f0aadbfa1356fcd426529b"],["/images/WangHaifeng.jpg","176ff0336852f9cdcd42564ec3ac8422"],["/images/Zhi-Hua.jpg","266c10b305f9f1f05970012df0848908"],["/images/about_top.jpg","2519275d1c7c3a99e04d4dc678c9869b"],["/images/alipay.jpg","d0b91c722ca6cc811712fe5b6585c49c"],["/images/aminer.png","86f43083e239e02c21be4f15a0a434e7"],["/images/aomanhao.jpg","30398411ae62ebc395abd9ce54be3e10"],["/images/archive.jpg","feae9fe09991f5b375ba091043855dc9"],["/images/article/002q1Tc8zy6LhCOA0ZTfd&690.jpg","b62fb2ac389df46ea500ed1ce1c601fc"],["/images/article/002q1Tc8zy6LhDP0Lfd7b&690.jpg","6653aeef3a9c1aab75824ce21739181e"],["/images/article/002q1Tc8zy6LhDZgnKWea&690.jpg","db267e542c6556fac9194d46d8415297"],["/images/article/002q1Tc8zy6LhDsplHUce&690.jpg","3eeb1de48f910eda0c05942ad06f9cbd"],["/images/article/002q1Tc8zy6LhEhJ3bq38&690.jpg","e75c695754b2785e35631debc835d57f"],["/images/article/0129A8E9-30FE-431D-8C48-399EA4841E9D.jpg","7ec4bebafee5f42973388c2eb7b9664d"],["/images/article/100685088_1.jpg","0c2b3d002024cc6f4bee15e943375440"],["/images/article/1212206-20190327211458423-1226917494.jpg","c151050820e4e31f8d1584691b6405fc"],["/images/article/1212206-20190327211911073-1991058892.png","494cf15ae7cf470be23263d7bd9ed0e8"],["/images/article/1212206-20190327212328323-1777789895.png","38edb366b38142780c538eb48dabdb4e"],["/images/article/1212206-20190327212528017-77666794.png","1b5cae0ed60e637cc46181d5733ec09e"],["/images/article/1212206-20190327213344636-1165289069.png","f131629ed89f60495cb0e75ff528be92"],["/images/article/1212206-20190327213808713-1461645969.png","33d54b04a2f8691a3daf4666db7e7233"],["/images/article/1212206-20190327214347921-789418649.png","1a274233534c4eb506a9a5664333bcf2"],["/images/article/1212206-20190327214647551-1609392178.png","5ae472af20975c0315ac593a3cfc264d"],["/images/article/1212206-20190327215117661-519790211.png","cd3dd997c4855af912f6de062df9d2c3"],["/images/article/1212206-20190327215336904-867030622.png","a6a339d8dd1ec750a816379003979094"],["/images/article/1212206-20190327215347866-796341061.png","4e9c372dad5a6228b2615666a096d7a1"],["/images/article/1212206-20190327215644805-894884421.png","fe0d1e12b0376024a8b96585ebd23562"],["/images/article/1212206-20190327215737829-1783813782.png","194b6469d927aa17ee26ee03b6b84421"],["/images/article/1212206-20190327215822325-1581204905.png","cd3dd997c4855af912f6de062df9d2c3"],["/images/article/1212206-20190330101656413-693026470.png","d1cb47976ebfd9001a391e7d706384bb"],["/images/article/1212206-20190330101839703-1841460597.png","2408479215870f1d1c04d65b6daf3550"],["/images/article/1212206-20190330101954804-1835035642.png","0b84878c1c371104d591a90d5ce354c5"],["/images/article/1212206-20190330102235916-125105233.png","f26179e23afef64606702b06acea5a02"],["/images/article/1212206-20190330102303458-1606971343.png","7fd3d9e3d268edbf8b4feacfef10b8ce"],["/images/article/1212206-20190330102320633-775203946.png","625dc8715e922a6905993991c7ea715d"],["/images/article/1212206-20190330102354411-507958863.png","b76a1d1f246bbb1de17963ed3f015f55"],["/images/article/1212206-20190330102704798-1744561875.png","6383f5f3fea927fdc06a0c56de35b18d"],["/images/article/1232314fdgdfsg.png","cdf4fb63e452108015f42d47c9fe16a5"],["/images/article/1234352-0eb0f1bfd7de705b.png","e1d12eadbf53087319eacafa8739dc13"],["/images/article/1234352-3d744d9364a4ba40.png","ff27846e6d97e98ca2fa27672b3db770"],["/images/article/1234352-4029977524e3b365.png","b8bf58388f9d5f62f07e5e8c02674e3e"],["/images/article/1234352-570afdfc6fabf3b6.png","010f8fb124838ccbac14b12a79d17629"],["/images/article/1234352-57538d21dbb34e65.png","a6e9bea31c9f1061fe1d6bc832d669a1"],["/images/article/1234352-66ce0cdcef5e2686.png","cdd90d8c37bd633016b9d44d74309866"],["/images/article/1234352-6ae594f795406b8b.png","6e512364bc0b34adbe510242b8e928fd"],["/images/article/1234352-798b134107b6593d.png","d30b037520e583fc85526bdf69c38df5"],["/images/article/1234352-8b1b6f1b200fd7b5.png","e5c0f6d6bd5c3a9614d0851a41fa0ee9"],["/images/article/1234352-8ee36cc5ce832b17.png","fbd760f09bfbf4f75f7a21ab12bd0e31"],["/images/article/1234352-a56cfde25c688859.png","99efb8a6d919005b1b2059b9222d5f37"],["/images/article/1234352-abb73822fb6d2a2c.png","893ba33fcd444db7a8688e8deacb0d7a"],["/images/article/1234352-af8dd9722c762c13.png","8c2775930f20d000a378ea0b852b3c67"],["/images/article/1234352-b21bf64600c4e32f.png","220b1be0858a1a9adfe840d9eed0a317"],["/images/article/1234352-ba3da0b06da97ddb.png","e73b1f3df6cab61dd5ab1e7f59817a73"],["/images/article/1234352-bb7fa36d116fcadc.png","138ce2749798feb5d34502b15a637641"],["/images/article/1234352-becdcdfdefb4eab7.png","dc259d80414db5f60c0d08635eac83a3"],["/images/article/1234352-ccc1493848871074.png","b25ec42d2ea0ca70954d2f5ede604b31"],["/images/article/1234352-f20521a962005299.png","9aa0b92456bdc1ea0e9028144e472fc5"],["/images/article/1234562019.png","3b89fa002d7161e92ad6c8bbcd5075a2"],["/images/article/164e6856d76ff161.jpg","522ecd2256ed03a0488ef6c5d42607e6"],["/images/article/20150105213214237.png","aa13cad1d65c1f8f03119f810463a458"],["/images/article/20150105213450046.png","e13ad2cf6cfdbe2fcb146cda52aff0ba"],["/images/article/20150105213522578.png","53654aa6547e48f645d7d5c12c67fee0"],["/images/article/20160508143448263.jpg","b59b1ad8f400c5ba40c8792af23b1d2b"],["/images/article/20160508143448263.png","b59b1ad8f400c5ba40c8792af23b1d2b"],["/images/article/20161020131820060.png","ab1c9e9eceb17b9ff5125e6c09d4050d"],["/images/article/20170713162906129.png","95950329ab5777b211276568e895a0af"],["/images/article/20180422215128864.png","e5b05962fefe2fb04bc585bc5b045ee3"],["/images/article/20180422215147575.png","297d83193dd6d904d4ca8262afc916fa"],["/images/article/20180422215147575_1.png","ee4502b5de69bebdb408b42e3c26a620"],["/images/article/20180817153030153.png","abbbb19224d188b4301b4a6189ef8056"],["/images/article/20180922220708895.png","bf405390d898d3aa42da80ef9d97c9d9"],["/images/article/2019-08-05-1.54.13.png","5442e39127089f19a0182ed58e68c916"],["/images/article/2019-08-05-2.05.59.png","592af1ae5cf84aaf8ec9f94be7e41d1b"],["/images/article/20191118093651.png","de8c9a1d04a21c25973087a075ed472a"],["/images/article/20191118093842.png","edd4f1d313f2323f4f1b70758ea3b126"],["/images/article/20191118102100.png","c53e314bbbc9ebe76203e12cf7880a27"],["/images/article/20191118102814.png","aef0b06ab14763658e9a01ce8f69eae5"],["/images/article/20191118104450.png","44a1079c6272e433ddd76cdc56f5234e"],["/images/article/20191118104655.png","d09635ccc0fea722c961e69e76f3cd91"],["/images/article/20191118105240.png","3c7e7cb9fe40588b5844c5216d8ce7a2"],["/images/article/20191118150551.png","3640e73a959104b4a8b4643b2bbfd2dd"],["/images/article/20191118150631.png","06cbf2d4872248d56c85b53fd4897bf3"],["/images/article/20191118163546.png","3b7f383693a03fb15348f09158050706"],["/images/article/20191119094513.png","70468fd5c58ebc789165616d57346c90"],["/images/article/20191119145602186.jpg","2b4d307e0e0a3d50796cb8f873e61b1d"],["/images/article/20191121131613851.jpg","d227e83e4b069dd758b1e3c731d22a50"],["/images/article/20191121140526768.jpg","6982df349defd70f1d71c5ecb15a3376"],["/images/article/20191123125246.png","1a69ab907eb4a19653bb30b974ea5fd5"],["/images/article/20191123125742.png","d631fd880ad2797e6142a2bea241cc88"],["/images/article/20191123125952.png","11d3b60d9acb85e250355d377e59873c"],["/images/article/20191123130306.png","22c7c2e0b4cd096beb8cc76c2e9267e8"],["/images/article/20191123135324.png","4f612b83b25cf164a01fee574bf1db5a"],["/images/article/20191124093619.png","ba29704112113a1c9a9a60126f53a5f8"],["/images/article/20191124095621.png","8a88877d8656229511f79537abc85c9c"],["/images/article/20191124095730.png","5f5d0996e70594b5c417d596e5073993"],["/images/article/20191124100230.png","9a8b35db56dff9409e0dd67aa6b68ef5"],["/images/article/20191124130021.png","ff6e3606e9a947a2cb104e4a463ef337"],["/images/article/20191124133708.png","5dbcbf0c6ea15e848ab44682bc0d173b"],["/images/article/20191124133827.png","952d97c7e8e3af400516e9c55a450d2e"],["/images/article/20191124133950.png","8cbcc9642feef62a013a5543da0ba5a0"],["/images/article/20191124134108.png","0dc1734a66c7799ac51d5f8222d8b440"],["/images/article/20191124135009.png","bb22f765806e78a9a982d88486f3a84d"],["/images/article/20191124140031.png","092e85ee805ebcc13d913e1e591c47af"],["/images/article/20191124140201.png","565cf6ad05a15d7c15b17880e3c71445"],["/images/article/20191124141310.png","bd8474283439804c3c84048c1a86f06a"],["/images/article/20191124144844.png","42817faac98d7bdea8bd62aa08a0b87b"],["/images/article/20191124145021.png","c049e2402788b1f964d9906eb425346a"],["/images/article/20191124145215.png","12e6dee6b599a80522c31c05472acefe"],["/images/article/20191124150945.png","fae194da41fc17b12684a8e8a73b6386"],["/images/article/20191124151126.png","793b8d0159dc5085d6569a46919770e3"],["/images/article/20191124152031.png","176771b8d488934db8660106e02be9f0"],["/images/article/20191124152217.png","47fb021fd75e4281945b27b7192a951e"],["/images/article/20191124152418.png","8e558186df610a45895d89be68a53083"],["/images/article/20191124152459.png","2685a6dda349e07670899a25acbe272b"],["/images/article/20191124153208.png","1a45d1bd852f372dc896902800559ebe"],["/images/article/20191124153313.png","d47d7d6ec36674878236e481b4a2abf8"],["/images/article/20191124153349.png","82ded4372928ca173b97e36b3a4eeb50"],["/images/article/20191124153749.png","05d0992b5a440a016f42653d7d0c13e8"],["/images/article/20191125152248.png","e247546265ba21ab893a282b7f3442dc"],["/images/article/20191125152829.png","493cd5e229fcc6f01f1d56e04b0f5b65"],["/images/article/20191125224701.png","27110daf276ee26b30de6fd5d0ac1c7e"],["/images/article/20191125224800.png","a16002cf97ed1020b28fdb97d1f6ee91"],["/images/article/20191125224901.png","650473dc60ddd3a358a771fcd1dfdc04"],["/images/article/20191126125256.png","8f82cb68306e3c04b30b4f4f392b21f6"],["/images/article/20191126125421.png","4449777a4f6a82e72304b06050aaa0a7"],["/images/article/20191126125633.png","0d5df56de6895cda6d2a6ed91fd5095d"],["/images/article/20191126125913.png","ae2206dbd36e54306d930f0c86dfb03f"],["/images/article/20191126130329.png","6085995c179c18b7b7f740c7337efdfe"],["/images/article/20191126130752.png","c51546286d64fa6a8915d823e2476d99"],["/images/article/20191126130859.png","8792067358a219edbf4aaa7987f04a6e"],["/images/article/20191127131420.png","b7a7ea08865d2b9a5528c75c674aaa69"],["/images/article/20191127131913.png","14bb7647018f6ced1d57d0c918de4bf3"],["/images/article/20191127142245.png","06f884360aa1fe40ee3827bee4937581"],["/images/article/20191127142429.png","224c4e85860fcf914c420e5b22fb8384"],["/images/article/20191127142847.png","709afdc98adec4459a9247943ba04b4e"],["/images/article/20191127142947.png","d939da079982924008302dc0c3648d3a"],["/images/article/20191127144028.png","b549a0ca34eaa6ad6fb55e2b2563b362"],["/images/article/20191127152307.png","0feae4ba7e6b7bf2ceb53cd461063a38"],["/images/article/20191128161437.png","99a15da1c8cca521dc1165c1dca888a9"],["/images/article/20191128170755.png","6201e2c2213ba28b057a75654eae61d1"],["/images/article/20191128185604.png","e6da4a5c76fd5aca42e1fb573b577962"],["/images/article/20191128190218.png","9f7cc93be39cfba8e129e526be3e068f"],["/images/article/20191128190845.png","086accda197a3f6178b85fabfb855489"],["/images/article/20191128191954.png","dde041129094af667dfee729f9c313a4"],["/images/article/20191129102252.png","1de1f6e9060ee36eb23289deefd5c417"],["/images/article/20191129102455.png","6aa50d391b973c87c72a75dd3cd11372"],["/images/article/20191129102834.png","4d77d207d0e802f15f7c275517e991b4"],["/images/article/20191129103026.png","3620addf536b4f6927694e48f447460d"],["/images/article/20191207230134.png","e379f28f6835b7dd3069df67040115c3"],["/images/article/20191208232553.png","699eb4a5308ddd2cef6780d86ecc99db"],["/images/article/20191208232924.png","243538df7455faf778242b8a11d3a89a"],["/images/article/20191208233047.png","f21bfb86b7c480984986499183299c23"],["/images/article/20191219221840.png","5e0d628686355f9f880306b8ffe22741"],["/images/article/20191219221854.png","c1c9d6438f3b66b5a1b3cfadf8c582f9"],["/images/article/20191219221924.png","fa666bd770f6a452fd0baec317e270ab"],["/images/article/20191219222640.jpg","349369c762acb3fd24d8ead901aceba1"],["/images/article/20191219222640.png","5193b27d3aacd4e9c0607a0a76286a47"],["/images/article/20191226.jpg","91a0eec2ccb2a6d68b74ce09139f40b7"],["/images/article/20191226133243.png","5cc839d6babf6d740ff4c7335dce8907"],["/images/article/20191226145021.png","6b66e88a75e0504c3d3eee59bdecb506"],["/images/article/20191226145436.png","0abfdd57a186ed07ac5ac3974862b2c4"],["/images/article/20191226145543.png","68163fcf76226f563d3dcb2d7283899a"],["/images/article/20191226145626.png","c994cf931cab20631c78698e83817f41"],["/images/article/20191226150623.png","eb6e94d0b84974d8e6cfe9df165d50c0"],["/images/article/20191226151208.png","c971b475bd1322c473989c11e746be9a"],["/images/article/20191226151430.png","82e83f6a44540679280dde73be757477"],["/images/article/20191226151531.png","052a52129841d6eb8108eff9eb57133f"],["/images/article/20191226151608.png","7273275709c984dd12358940e23dab29"],["/images/article/20191226151817.png","8b4735eeddccbee070933f7a4f166554"],["/images/article/20191226152201.png","d7fa8135b5fdd42e910fe633c4831c11"],["/images/article/20191226152412.png","2342109cc395c86429e889070722b8ce"],["/images/article/20191227161328.png","9e4b51226f5008cac0d325de76289092"],["/images/article/20191227161622.png","7f857dc99ceec82825775d37192a578b"],["/images/article/20191227161656.png","774211b0357288c96665f6980f42012b"],["/images/article/20191227162724.png","682d9c0ea29da99d725030bda6d494dd"],["/images/article/20191227163618.png","380139b556e378f6490386c0576dd170"],["/images/article/20191227163848.png","e2aa26895b306c844c2456e0abdbd4f7"],["/images/article/20191227164942.png","69553c853830a17395eab53cab6c6677"],["/images/article/20191227165149.png","f112b664e76133e2c51d1795f722018d"],["/images/article/20191227165340.png","d0b64158dfac8eda11caea3e57843eb9"],["/images/article/20191227165456.png","4b34eb4bbd9edfa1b128c82f28c8e639"],["/images/article/20191227171641.png","c3b1344e3feeb52600cfb621a8ee17d1"],["/images/article/20191227171839.png","ef68bc20d964ffbdab6226a291bdf5a3"],["/images/article/20191227211521.png","828d9b682a0e56df1f822f4294272f26"],["/images/article/20191228112401.png","802686281f7299abecdeb74899c8c0ce"],["/images/article/20191228112638.png","5d18a02b1e22ce787d390b99926ef03d"],["/images/article/20191228141630.png","6122f8a86edfcc277059a10a20b52972"],["/images/article/20191228141835.png","3ef8b5211a0105a85e32a634f6b845df"],["/images/article/20200101213442.png","2559ecdafadf5c3d568d5c361ba9ba89"],["/images/article/20200101213643.png","a2f773698384ba8c7c92d05c1fe69eb9"],["/images/article/20200101213950.png","eae8a49208555713a325996b8c42465f"],["/images/article/20200123151745.jpg","04ef4d5f24a8facdb8ec7d5c7249b930"],["/images/article/20200123151823.jpg","1149a8be462b51828ea6ebfb7020ab4a"],["/images/article/20200123151833.jpg","7be6fd3fa9bf3c21e4b3ccf7a2140f2f"],["/images/article/20200123151841.jpg","f80c4e9e8302066d0dab167ee5f7736c"],["/images/article/20200131134502.png","830929a7a655dba43b965e76f6d78375"],["/images/article/20200131140435.png","1ff6797a7ace008d2b287a3ea26dee84"],["/images/article/20200131141213.png","190d140bb9fe7d0eab7a5bb74f0d7998"],["/images/article/20200131141641.png","b77c6269ef24c4939c65f43e87871c22"],["/images/article/20200204201928.png","6e0099a139e20c16ddc4d13d9def9912"],["/images/article/20200204202014.png","aef01f7f33cba25971f5a1a02bb7ba9d"],["/images/article/20200204202037.png","c94382ad65baa8b2e917f21daa6ba5cc"],["/images/article/20200204202100.png","a5f2a4150f6e780fe0d3e447a13874ab"],["/images/article/20200204202121.png","df44c8e8d017195798407da345b46294"],["/images/article/20200204202142.png","4ef00940b16d4774fce8951da63fdcb9"],["/images/article/20200209222544.png","5cda62a036a3cb7f911c8f4530cd8b3d"],["/images/article/20200209222722.png","0014225141d50bf7c042825ab8cff7a5"],["/images/article/20200209223313.png","56a05bc7eca814a957006cf8d2a51b9d"],["/images/article/20200213223713.png","896c5f8d21970cf788297f4c28f6abdc"],["/images/article/20200220203633.png","d2f009b919867d1ca4832d51efccb84c"],["/images/article/20200302133606.png","dfde93b1e471effc5ace7adcc2694185"],["/images/article/20200302133939.png","d4c3e9f0523e4085f1847d5d188f70c4"],["/images/article/20200302221732.png","8f4a78ef81e00154befe147dbbc8e8f8"],["/images/article/20200303135042.png","a69969aa2a8dd0bd88b3beea38cce9dd"],["/images/article/20200303135204.png","3a548e0436d7c51efe224164391b1262"],["/images/article/20200303135245.png","b96b923e8f386cf9270dd8484d72cfd8"],["/images/article/20200303135426.png","db33b6d8e0fffe4239ba5c411c19df50"],["/images/article/20200303135512.png","3908b4224aef6758f1b5fb080ad39194"],["/images/article/20200303135546.png","10bf7bebd73f97e5623782d5f1ea8691"],["/images/article/20200311213901.png","907ef3f03b4e614f8494abac8b2433da"],["/images/article/20200311213944.png","6f918ffc8da699921c27f15c274c83d9"],["/images/article/20200320205810.png","20a1143bdc73529ec7a6a161d0c48878"],["/images/article/20200321201220.png","05073bddc481d181a143bdea49af7077"],["/images/article/20200321202457.png","0b233039d0ff0004d480dd7f044a228a"],["/images/article/20200321203708.png","59be361eb77714ba2817d285b882110e"],["/images/article/29381f30e924b8994bb77cac64061d950b7bf69f.png","5d59936a0568b93d8ad58df9c953c467"],["/images/article/39a9707f892b4d39811a2d3ad0c67ff2.jpg","72e77355f17f48bba4e16ab025204da5"],["/images/article/48540923dd54564e223d3494bdde9c82d0584fc7.jpg","18fba6100553ea8c396abe3dc19297f7"],["/images/article/5366d0160924ab188eed6a943dfae6cd7a890b9d.png","5b98add4c24a081ef80b110641aa3a5e"],["/images/article/5494434-5949697f2f2ba48c.png","4b0181275b42df5bd4f6449088276126"],["/images/article/6f42d391efe1d98e9ccf32f0d0df5d22.jpg","6567e489cb388cd3f7c9f18befc59d62"],["/images/article/8.jpg","89b3f7e66c000820f391522a0812e387"],["/images/article/AlexNet.png","b4a1eeee2a411fbfba56d18f6d2fc92c"],["/images/article/Pooling_schematic.gif","15e89ec6a866be1f7130655527079786"],["/images/article/a092b9b850de4c53b02762f057a8554d.jpg","f43c5b40db6cd47dc6c9b855d0c41dac"],["/images/article/a50f4bfbfbedab645ccff490fe36afc379311e24.png","ed48f7a8f3fa97c92f53439fdbca6786"],["/images/article/abe1eea3ca79fc28-c577ebdcb0f3dbcc-12b18d568f3a18bbb0e7ba20055a1039.jpg","6b0a535955b0cfdfa4011df69917553c"],["/images/article/asdfadsfs.jpg","8dd6f2e81b360f022fb0dfaf9d6e8612"],["/images/article/asdfsdaffasdf.jpg","5a2befe3e3dd6c53d39bd9b48a253261"],["/images/article/book/20191120225804.png","62619e8ff182b8722a0bf98269ebbb1a"],["/images/article/book/critical_thinking.jpg","ae25be016b0d33df0b2f0e04e14a574c"],["/images/article/c8d9b766ly1fhuyb90f4sj20c809ddgq.jpg","8d5a903604b87d6288ab56224aa2bd02"],["/images/article/c9fcc3cec3fdfc03f23fbf16d73f8794a5c226dc.jpg","1a9545c5e3c34b53dadb104d64b61184"],["/images/article/c9fcc3cec3fdfc03f23fbf16d73f8794a5c226dc.png","1a9545c5e3c34b53dadb104d64b61184"],["/images/article/curl.png","5765eb2b93cfcd1b0c347e4818a6fe61"],["/images/article/cv.jpg","d211d13615af5257c75eb18cb6190c7d"],["/images/article/d62a6059252dd42af3835f580f3b5bb5c8eab8bf.jpg","5a2befe3e3dd6c53d39bd9b48a253261"],["/images/article/d788d43f8794a4c25b5e4dd902f41bd5ac6e39c6.jpg","fbfb1672d00a5164a4a5642fc6d76e76"],["/images/article/d788d43f8794a4c25b5e4dd902f41bd5ac6e39c6.png","de28d545c1f7761265ef53c8a9462bfb"],["/images/article/deep_learning_object_detection_history.png","14936dc16f5502ad35f0d5703655341c"],["/images/article/dfbsdfgsdfg.png","e00783f85587560ec5d5b0dd3d34cd48"],["/images/article/dip.png","c1327707b3415cd89ff8ce8b7b110b76"],["/images/article/f7a1b6fb61ac06631d5b8e0d9d8c2868_1200x500.jpg","2ef8afcfc9b2074241bb1f0ef75dbf23"],["/images/article/framework.png","ea983d238d27ed6eaf0941a1f6df1a6b"],["/images/article/gif_1.gif","1d762f3ec4cde94c0858400cb2d24067"],["/images/article/git.jpg","6f803a6b4e892ad2795dd3b52ff4dbb6"],["/images/article/github_coding.jpg","3aeae25316a9688ee7f5a5bb34c8a8dc"],["/images/article/hello_world.jpg","ec968fc129f2afd5c8251cd61255f7b5"],["/images/article/hexo.jpg","1049a4903e1f46250508bb07bf6b9443"],["/images/article/json.jpg","f9d2c3c60feeff9638c335ab10b61170"],["/images/article/lizhi.jpg","9b577dab91fa33e0178d75cffddbedda"],["/images/article/lizhi_see.jpg","e6fb0fb589ffdb55ac275e3fa6197a54"],["/images/article/loop.jpg","dfb33e14b5e52f716694dd90d45eba5d"],["/images/article/main.png","871fc46960b25f98529ecec229477ec4"],["/images/article/master.jpg","7a77ba9335c01afe8b20a20783a48bc1"],["/images/article/maxresdefault.jpg","377e30a1b3a2d86cff1fb7b0ff424c8d"],["/images/article/md.jpg","c692c9257023a4a92212c189050525e9"],["/images/article/movie/joker.png","c33bd7f94bb49e358e9512c8fcf4442f"],["/images/article/neteasy.jpg","fe037d0506a2c8248cac1a1f4c157cdb"],["/images/article/npm.png","a4c978712c843c579ab04ee2bde8a07c"],["/images/article/number1.png","376652d437783b0b9c51dece1c930871"],["/images/article/o_1911140113383940902-7569280b566d0e58.png","cbccf37389ab3e5ec776f97ec63c937d"],["/images/article/o_191114110431111.png","2f8f77726ad690f5f4946429e415a19b"],["/images/article/pIYBAFregg-AEan1AAMj4rvJat4359.png","f2855a98b875ab3ec8e16ecf6c6d4e72"],["/images/article/pIYBAFregg2ATy5SAAEQUsv9WF8019.png","49467637b2564b82a7b4c2e277d46b5e"],["/images/article/pIYBAFreggeAJhflAACFamG9M3o011.png","b2baf2b3966ab1f4f994ee8dd0c90bac"],["/images/article/pIYBAFreggiAC8-aAACAg54bzYo475.png","591b04bc71420eab0268db8a912b11dd"],["/images/article/pIYBAFreggiATHJ7AAEstloH4_M280.png","32a10a2148687b52b2b83e244ee482d8"],["/images/article/pIYBAFreggiAVJYtAAEv0s5MlhM898.png","510c5951e5342076c102b47ce8aa6cac"],["/images/article/pIYBAFreggqAMAUIAAAur4t_qLQ857.png","b198c23b37fce96bf693270d77521e78"],["/images/article/pIYBAFreggqAPt54AAAfaKfUS8U979.png","2546ab5a28825e17dd1fa83e6ef73c87"],["/images/article/pIYBAFreggqAUl7yAACokZwIXaM214.png","0dfcec9fd7559ffd22fcf5e4425ee54a"],["/images/article/pIYBAFreggqAbb1DAABnl3M4AWY167.png","ca1a9c437fdf0c142509450bd21cf5ec"],["/images/article/pIYBAFregguAJvoGAAATqFaF_Pk601.png","c16b3ccfacbb351327469c1df426385e"],["/images/article/pIYBAFreggyACO9FAABorvOb-GE402.png","a1fe536d6a203e5cbcaa3ae361b791be"],["/images/article/pIYBAFreggyAFTuVAAEZZ59r0Cs173.png","1d21e63b7e1973db536c5b530be76d5f"],["/images/article/pIYBAFreggyAVvcCAACg_W9CZgQ877.png","7410713f44ce2d3c1e8781f6fa46c1bc"],["/images/article/pIYBAFreggyAWtpLAADAYQTV2bk952.png","9a0da2ffa5baf171ee65857c4da8230d"],["/images/article/pIYBAFthILyAIttTAABC5ekxewg426.png","ad948a071d27b52f3a4774637c45a635"],["/images/article/py.jpg","7835172990d14c0575ba0cf75a7e37ff"],["/images/article/redirecting.jpg","7830c68f085c0b0fe33b77c8bf4a16ed"],["/images/article/share.jpg","825c056eea702c5b0d7ca65695be2eba"],["/images/article/side-menu.png","530b1a269bf9042cf75b42c5ab62c615"],["/images/article/sloved.jpg","6c272f6470a98eca718c2fd550bbd804"],["/images/article/sql_server.jpg","70ddec1ef4b5e8b3c40323fab8eb6d2b"],["/images/article/tf.jpg","0636e2f37ab39f1855876aef38a9381a"],["/images/article/timg.jpg","bdf58f0d1120b08cd9a4d54481852d11"],["/images/article/u=1235044799,3526385205&fm=26&gp=0.jpg","3683fb2db4672c8fc119e736dcb1834a"],["/images/article/u=1838553884,3059238991&fm=26&gp=0.jpg","344b89c84991d1e0a458644b5c405157"],["/images/article/unicode.jpg","bc3dcc737e6dde4d6899f01526f82d14"],["/images/article/v2-44ebfe62924ac8f813fa9723d27e4d2c_1200x500.jpg","c2456a56453f204107d0836ecfed8111"],["/images/article/zhizhizhi_1bb6y-2-672x448.jpg","cd4743146a1704d202d7830d020be1e6"],["/images/article/一无所有.jpg","f8e0d62e9428be14571fa9c23916ebc6"],["/images/article/李志.jpg","e3b901d0a49d3346864c128d063ff5f9"],["/images/article/梵高先生.jpg","db00be1a80f65479943615e99dc89bfb"],["/images/article/相信未来.jpg","29ee7fb293b2e3186616185d6cd23986"],["/images/arxiv.png","86eca63cf4764eaff9ee2ab0c5fbdd98"],["/images/author.jpg","fb687c5f1fa8137972802427d2e51523"],["/images/avatar.jpg","6b214dea62142f8fadf96d342e0e673e"],["/images/books_top.jpg","2b3142da7abd31294021f6224335d011"],["/images/category_top.jpg","6e57605d01ac89b22e4c164bc6fce058"],["/images/ccf.png","4a26a4d85f430490011408c650e3bc70"],["/images/cdblp.png","bb9463bff13489fa60583342b536afaa"],["/images/ckcest_home.png","6fd768068fc3bebf1c28b4df4a8b0ac0"],["/images/cnki.png","831bb0b58262a97544dd2272e336fe22"],["/images/comments.jpg","f20a6793c8817a579e8978a742c05d2b"],["/images/cover-1.jpg","103035c2ad4978510dc3e36ccb06f965"],["/images/cover-2.jpg","5373bb015bd05f0efa703d385cf6843f"],["/images/cover-3.jpg","189b4748f3127d982242cd006038d19a"],["/images/cover-4.jpg","45e152dd491d10242885acfdd63a792a"],["/images/dblp.png","82804e0dfe5de958057af8e92dd7f94e"],["/images/ei_w.png","825b840a33fdbb6416870ac25c00ace1"],["/images/favicon_64 - 副本.jpg","3840f0a636a866b295ba05e478b7a69f"],["/images/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/images/huiyi.png","10f67c767d23919f93da4a66463f5eb6"],["/images/link_top.jpg","0d5b0b89ff890de1b923b8a8cff7daa7"],["/images/liziqing.jpg","3c295289fd7380d5b8eae6718aa7974a"],["/images/lujiwen.jpg","043998d51f77b1268004637793e27b70"],["/images/movie_top.jpg","164c73849f7c2e106310c528915cd6ca"],["/images/music_top.jpg","7ea9eef836a3c47e75ad46bc693be209"],["/images/mywechat.jpg","ae01e23f58a7421cb2d7efbe07aeaa4e"],["/images/p.jpg","cc8d73b0c8944b511fbc6f1870c21344"],["/images/photo_top.jpg","3b6699c9dbe15f154272be89863b32b4"],["/images/sci.jpg","8b7275d35187aa2745cdaf90e94ca3c8"],["/images/sci_hub.png","75c48f7541cc5922b53280ae826622aa"],["/images/sciencedirect.png","d597511b7284596935b93dad026d272b"],["/images/sciencenet.png","28c025558ae7ee47065c17c6d8649049"],["/images/tag.jpg","21635924b9b4cc015bff7b326b9a4398"],["/images/tag_bg.jpg","33e021e4e4f2442a332e014e5a34ecbd"],["/images/tag_top.jpg","28c40e0cc6c35c269967587092f990e0"],["/images/tianliqin.jpg","bed8ca60db429c1fc2ab9d207420bce7"],["/images/timg.jpg","bdf58f0d1120b08cd9a4d54481852d11"],["/images/top.jpg","7703b36357f424bbae870e88f1547e15"],["/images/wechataccount.jpg","a494546232b376c5b214581246071be6"],["/images/wechatpay.jpg","61cb490354ba7f193c329a7500e2fbfe"],["/images/微信图片_20191223173808.png","045c7242d79c25b875df664ab08e73c8"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","9dc47a87108ff6bb6cd5a6ce34a4a511"],["/java-abstract-interface/index.html","bc856097bd40221a98808b74649be022"],["/java-class-base-datatype/index.html","fdb6bc3c206d8b148ec9ce060b16db23"],["/java-string-stringbuffer-builder/index.html","5c3d17278516ac75d2d07d470797b167"],["/js/baidupush.js","be25421879d3eb443f2ae93dcb46644e"],["/js/main.js","4ea4b89d63e2f123ca038d2d8229e168"],["/js/runtimeshow.js","07938b796b686b5c5845f398a7c2fc7d"],["/js/search/algolia.js","1af6d0127fc5e7a0e5cb3507d56fb1f9"],["/js/search/local-search.js","8ab1d8161dc54159c5be826308057318"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","a677aaed28123b70b640297be29f2750"],["/js/third-party/anime.min.js","94059f5c0365869526826941ff53445f"],["/js/third-party/canvas-nest.js","1cb48fb0ef3a385189b87c27a87c8ed5"],["/js/third-party/canvas-ribbon.js","7d36cac2647b6d96981eee999e99cb6c"],["/js/third-party/click_heart.js","bc0edf8a790d216a0284f8e442017cd8"],["/js/third-party/fireworks.js","8ad5d796e461b063ae83a2d3b663a07a"],["/js/third-party/jquery.fancybox.min.js","44e486cc12350d5ebb073a1a68c174d3"],["/js/third-party/jquery.min.js","4a55bff540a905490139495d74253ef3"],["/js/third-party/piao.js","4bdc4a6dac9b158b018b59dc90a4d8cb"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","f764476e2e6c791ef2e0970eff5f4a1f"],["/liner-regression-writen-by-tensorflow/index.html","2a66bb8dd406129a35221f29c7b0034f"],["/link/index.html","6361d78a64d09a186ee157059e0d82e5"],["/live2dw/lib/L2Dwidget.0.min.js","2735d00cdd9b52a2b50185083f545a6e"],["/live2dw/lib/L2Dwidget.min.js","34d7885b927b08f5ac22afc3ac01443e"],["/lizhi-songs/index.html","62e06057d03f75401babe00b64da1a98"],["/lrn/index.html","f2a984caefbb203ab07c75567b2f0b9b"],["/machine-learning-different-from-deep-learning/index.html","7621c2a2de6df42e2e90237d2dad0665"],["/machine-learning-project/index.html","92776b77b51f835b120de926353be9be"],["/markdown-format/index.html","03f1f9081e8c5521bfda2ec82dc9d0d1"],["/markdownPad2-break/index.html","d0a1f903a622f7de37151733c1958d46"],["/matplotlib-draw-a-dymatic-func/index.html","a919fd363246b0802e0fc62084c8f325"],["/matplotlib-draw-x-and-y/index.html","333fcdb6b2ccf0d1b823ebd5b4252e25"],["/movies/index.html","8a48cd10587aa4518146cdd643432771"],["/music-test/index.html","ab3ff7e7ed6e402d69ac79c582211ce4"],["/music/index.html","95c38f9e42fd59e55812b374de4f23d8"],["/mysql-to-another-disk/index.html","9448ba7ba75b1e948518347214b1a9ad"],["/note-master-1/index.html","c0e8b9d3fc056bee25927d16679c08ac"],["/npm-npmr-content/index.html","abb085870a274bef67e938a63d1f7cf4"],["/page/2/index.html","c8962e260f598c94758cdf3e763de414"],["/page/3/index.html","9dd65c73fab0e14405a1f9ccc4cc62bd"],["/page/4/index.html","d371cd99cc4f4c0070fdedc1056cfe28"],["/page/5/index.html","4400cdd45044a68a3a628b1094be07c1"],["/page/6/index.html","b603b6714d84f93f9c7ba02cd3a8088b"],["/page/7/index.html","9ab76f9978e3eab849438afaedc809fc"],["/page/8/index.html","5823c473f1ed48e99ca62c7a5fab4ba2"],["/page/9/index.html","29d57a93bd6df5fc745d5a0d9c45e1cd"],["/personal-domain-for-github-page/index.html","78ad58ab06b9623918125297d5f3997c"],["/photo/index.html","6e73ec8938723a4f0ddb581104dc0b30"],["/prediction-algorithm/index.html","1232c6dd1849b6bfe1fa17f2d3c228e2"],["/pug-how-to-add-google-ad/index.html","467c04733a0f11572550bbdb1b91c92c"],["/put-your-hexo-blog-to-baidu-sitmap/index.html","72b5ab91bf668b52c96d8610e7f04b31"],["/python-debug/index.html","b31ebc4dd9d8ccb02ce9747224526281"],["/python-json-problem-sloved/index.html","94a6299e9d3b6d81acedc247a0a76109"],["/python-logging-error-sloved/index.html","f0d1d42da50db96783b9a2c954927bec"],["/python-namespace/index.html","d046d2b1a3b2d0f2e053e3b320089656"],["/python-scan-dir/index.html","e54105a9c7b0506d570281826ac7a59c"],["/python-spider-crawl-fund-data/index.html","c8c9341d31f32ba25ca5c8c0972a69c6"],["/python-tab-error/index.html","44054698f634964f06d1bea8d6e2ca6a"],["/qing-yu-nian-resource/index.html","59c5922f68a93481dfeae9cb6fdf57ec"],["/re-sub/index.html","17bd37110a345bc7d4d82bb5cb0a4041"],["/redirecting-forword/index.html","417900899bf2d170ace05efdc7f9a589"],["/sava-our-life/index.html","e58cb6bc6a17d75226daec3e85596398"],["/share/index.html","12f7c0b1ecebef2e2fb4552ba888fc73"],["/sloved-hexo-title/index.html","866984b6e02aa2f1c264a4738f7607d8"],["/something-about-curl/index.html","c5d8addeb54100d184947eed209e79da"],["/sql-server-download/index.html","73f2f8e824167f9c192516bf12e35593"],["/sql-server-reback-data/index.html","fbb4bdda00217994e1c78f848126d9ba"],["/sql-server-something/index.html","810f5445f9cb25120b0c70bf547d1af0"],["/ssh-connect-to-github/index.html","9be88bfd90cd1cf7ae536000fbdc5d59"],["/sw-register.js","b3fbb2edc17db21160482b2a66671c3f"],["/tags/CNN/index.html","7fb7ebc756c755a38a870c47c9c69d9b"],["/tags/CVISION/index.html","f35204827a5b6e6ae9447fa5867ef232"],["/tags/Conclusion/index.html","550740e98a48b9d268a5372eb76224ca"],["/tags/DIP/index.html","10da75d525e64db7c8ebb989d8a0077a"],["/tags/DLEARNING/index.html","bc1fb06c66637c2dee84c5533af6f58b"],["/tags/FKNOWLEDGE/index.html","8d8eefde2963cb85776fee81f994272a"],["/tags/GitHub/index.html","a2f66647a456af9849df801bb53b1eaa"],["/tags/Java/index.html","2eca06252a40de502f29324b4328e25e"],["/tags/LSearch/index.html","d84d62bfc9d9ed51354830ba6ad1797f"],["/tags/Linux/index.html","33f3163a93e2a2ce836b4324364797e9"],["/tags/MLEARNING/index.html","f04e8fefe99beba6c2062c854acfa3e1"],["/tags/Markdown/index.html","ba19ddc2a4c59b257870874cb6d3b797"],["/tags/Music/index.html","09425056a82903db03ee0c9ab60fdaa1"],["/tags/MySQL/index.html","66969044cbf32a3d353a76e16ef0fc5b"],["/tags/NNETWORK/index.html","1a4427819de4c4f1d5a11e847c985113"],["/tags/ODECTION/index.html","86a681d572448669748cb320d80902dd"],["/tags/PFRAMEWORK/index.html","9f8c6ccb5b905ce6c1a71e959fa2f8d0"],["/tags/PlayBoy/index.html","42df2af467f03d4d93d8c683246070bb"],["/tags/ProblemSolved/index.html","20abaf56834a558ab55db4856d37b3b9"],["/tags/Python/index.html","5f6b85f28f6d414b563075633cdee753"],["/tags/Python/page/2/index.html","a3ee438ace1b918df6d1918f6baf15ad"],["/tags/Softwarebreak/index.html","7651024588157215a6fa4a91a86484cf"],["/tags/SolvedProblem/index.html","42283bfd2cdb7ad58f50229fb5d6af29"],["/tags/SolvedProblem/page/2/index.html","8c4c9f8e5bccee68a630a2ae147466cf"],["/tags/TensorFlow/index.html","54105cdb80e2c2430bceb2e1f6678910"],["/tags/Watch/index.html","2fbd93dcd90c506e916255414a5f384c"],["/tags/Windows/index.html","d4c01ab6b496c5d468ed0dd1fbb956a5"],["/tags/git/index.html","b676f20523bb8bbf56fe77eaf9319f44"],["/tags/hexo/index.html","b89104e87e335f2749547ffe971c60ee"],["/tags/hexo/page/2/index.html","14859e813ecbd1de1cd2bf1f2bcecbef"],["/tags/index.html","2f1ae240a00e7f2de4a4bc8c7146cab7"],["/tags/matplotlib/index.html","102b92050b6ed966f7236425112c6fb5"],["/tags/movie/index.html","3c368ec19e64b5f2780ed672a25c1a61"],["/tags/plan/index.html","2445ce238b2f421ff6bac6affa3b3cdf"],["/tags/sql-server/index.html","feb896ccd893a3a9ad35e5d7e5fed91f"],["/tags/summary/index.html","a909014f4b95457086d01996a6d2c88b"],["/tags/个人观点/index.html","81b69f710162f64b37bb31e018b7250f"],["/tags/传输工具/index.html","7b0408e49861016c54655a542293b531"],["/tags/名词解释/index.html","643b0e3e366029cfb0fcd8346886ef19"],["/tags/学术/index.html","73a155938b0122d302c318c54283dab0"],["/tags/数据库/index.html","e958d99aa85883fa3df8ccdadb156bca"],["/tags/时间序列算法/index.html","4fe64967766a3452cd19b247e794c8da"],["/tags/概念解释/index.html","ca65135c2760e2ebc104b01f9282e81d"],["/tags/爬虫/index.html","d751f6d21c67279e0d192321d46fcfe7"],["/tags/破解软件/index.html","317b7c29ccb0357654ea360a5884d9aa"],["/tags/编码/index.html","f2d39ad16e59699e770a408423c6f5f5"],["/tags/编程语言/index.html","d399ded09877ce101815f174e90393d7"],["/tags/航拍识别/index.html","65224f3c108da896d3b89e62b9515114"],["/tags/解决方案/index.html","527038a3e027884fdae9fe0303251388"],["/tags/论文笔记/index.html","e0a9af4348a19fbc313aff13269dabf4"],["/tags/读书分享/index.html","e2bee4530e52c247984716755eda47c5"],["/tags/软件下载/index.html","87ef880692fa0e07163ca325d6fa7949"],["/tags/预测算法/index.html","bd6ffd8455f22f818c10a5aa31568659"],["/tensorflow-log-level/index.html","4eb87c70f1d455fc56cd0b8584c34a02"],["/tensorflow-mnist-full-connection/index.html","5b448e8e49e17e4f8e8e73b462d7f0b6"],["/tensorflow-reduce-mean/index.html","6dbd344f69bab609a12fe04687823341"],["/time-series-forecasting-algorithm/index.html","39895d12439c287a0efcb56cebe9dbd3"],["/use-cloudfree-make-your-hexo-to-https/index.html","0ccd2d01e13e2c7494d71f75a843cfae"],["/video-1/index.html","bf4585dfa1ec8be73440eff303f3ab47"],["/view-package-of-npm/index.html","17a7968c0a597613b61bddd3d2b90ce1"],["/write-blog-via-github/index.html","1d3d94ad21db5cd0814ac85864373b4f"],["/your-plan/index.html","7210e83f49907586ad62c1c45167eb4f"]];
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
