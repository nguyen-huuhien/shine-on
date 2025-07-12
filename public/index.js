//     function shineOnUrl(code) {
//         const url = 'https://api.shineon.com/v1/renders/' + code + '/make';
//         return url;
//     }

//     function makeid(length) {
//         let result = '';
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         const charactersLength = characters.length;
//         let counter = 0;
//         while (counter < length) {
//             result += characters.charAt(Math.floor(Math.random() * charactersLength));
//             counter += 1;
//         }
//         return result;
//     }


//     async function downloadImage(index, imageSrc, productType) {
//         // console.log(imageSrc)
//         // const image = await fetch(imageSrc)
//         // const imageBlog = await image.blob()
//         // const imageURL = URL.createObjectURL(imageBlog)

//         // const link = document.createElement('a')
//         // link.href = imageURL
//         // document.body.appendChild(link)
//         // link.download = index + '-' + productType + '-' + makeid(8)
//         // link.click()
//         // document.body.removeChild(link)
//         const imageUrl = "https://dev-rendering-engine.s3.amazonaws.com/transformation-15015-transformation_15015_686fd24596ca0.jpeg";
// const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent(imageUrl);

// const res = await fetch(proxyUrl);
// const blob = await res.blob();
// const url = URL.createObjectURL(blob);

// const a = document.createElement('a');
// a.href = url;
// a.download = "downloaded-image.jpg";
// a.click();

//     }

//     //Team 1 Codes
//     function getLoveKnotCodesTeam1() {
//         const codes = new Map();
//         codes.set('14S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/hien/background/Jul2023/1st/1/DS2.jpg', 12147, 12134, 'https://hehehehsss.s3.us-east-2.amazonaws.com/hien/background/Jul2023/1st/1/DS2.jpg', 12158, 'https://hehehehsss.s3.us-east-2.amazonaws.com/hien/background/Jul2023/1st/1/DS2.jpg']);
//         codes.set('14L', [12171, 'https://hehehehsss.s3.us-east-2.amazonaws.com/hien/background/Jul2023/1st/1/DS2.jpg', 12173, 12671, 12166, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/LoveKnot/ANHMAU3.png']);
//         codes.set('18S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/5.png', 17967, 17968, 12072, 12744, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/LoveKnot/ANHMAU5.png']);
//         codes.set('18L', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/5.png', 15015, 12610, 12745, 12025, 12387]);
//         return codes;
//     }

//     function getForeverLoveCodesTeam1() {
//         const codes = new Map();
//         codes.set('14S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/4.png', 5125, 2272, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/ForeverLove/ANHDC1.png', 8852, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/ForeverLove/ANHMAU1.png']);
//         codes.set('14L', [9202, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/4.png', 5545, 17197, 9233, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/ForeverLove/ANHMAU2.png']);
//         codes.set('18S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/3.png', 13442, 13444, 2283, 9366, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/ForeverLove/ANHMAU1.png']);
//         codes.set('18L', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/3.png', 5621, 9213, 13447, 1731, 13449]);
//         return codes;
//     }

//     function getInterlockingHeartsCodesTeam1() {
//         const codes = new Map();
//         codes.set('14S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/8.png', 12260, 12263, 17537, 12252, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/INTERLOCKINGHEART/ANHMAU1.png']);
//         codes.set('14L', [12288, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/8.png', 12274, 12272, 14254, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/INTERLOCKINGHEART/ANHMAU3.png']);
//         codes.set('18S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/7.png', 12102, 12608, 12077, 12774, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/INTERLOCKINGHEART/ANHMAU5.png']);
//         codes.set('18L', [12105, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/7.png', 12110, 12777, 12105, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/INTERLOCKINGHEART/ANHMAU6.png']);
//         return codes;
//     }

//     function getAlluringBeautyCodesTeam1() {
//         const codes = new Map();
//         codes.set('14S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/2.png', 12211, 12201, 12215, 12210, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/AlluringBeauty/ANHMAU1.png']);
//         codes.set('14L', [12237, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/2.png', 12235, 12222, 12219, 12043]);
//         codes.set('18S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/1.png', 12112, 12606, 12413, 12629, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/AlluringBeauty/ANHMAU3.png']);
//         codes.set('18L', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/1.png', 12122, 12123, 12117, 12768, 12128]);
//         return codes;
//     }

//     function getLuckyInLoveCodesTeam1() {
//         const codes = new Map();
//         codes.set('14S', [17471, 13527, 9775, 9752, 9756, 9758]);
//         codes.set('14L', [17474, 13547, 9778, 9923, 9742, 9758]);
//         return codes;
//     }

//     function getEternalHopeCodesTeam1() {
//         const codes = new Map();
//         codes.set('14S', [11104, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/9.png', 8707, 10061, 13888, 8718, 8689]);
//         codes.set('14L', [11105, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/9.png', 8727, 8729, 13887, 8730, 12641]);
//         return codes;
//     }

//     function getFaithCrossCodesTeam1() {
//         const codes = new Map();
//         codes.set('14S', [12571, 11343, 11348, 11347, 12569, 12573]);
//         codes.set('14L', [11354, 12577, 12579, 11357, 11356, 12578]);
//         return codes;
//     }

//     function getCrossCodesTeam1(key) {
//         const codes = new Map();
//         codes.set('14S', [2652, 2656, 8679, 14717, 2648, 2653]);
//         codes.set('14L', [2975, 3057, 2646, 14716, 2974, 9541]);
//         return codes;
//     }

//     function getCubanCodesTeam1(key) {
//         const codes = new Map();
//         codes.set('14S', [11571, 11587, 11576, 11509, 11507, 11488]);
//         codes.set('14L', [11494, 11500, 17457, 13641, 11510, 11490]);
//         codes.set('18S', [11650, 11648, 11655, 13311, 11510, 11465]);
//         codes.set('18L', [11484, 11485, 11475, 11474, 11467, 11481]);
//         return codes;
//     }

//     function getCubanCrossCodesTeam1(key) {
//         const codes = new Map();
//         codes.set('14S', [16734, 12081, 12092, 16741, 16735, 16733]);
//         codes.set('14L', [12096, 16746, 16745, 12092, 12090, 16743]);
//         return codes;
//     }

//     function getCrossBraceletCodesTeam1(key) {
//         const codes = new Map();
//         codes.set('14S', [17451, 17212, 17190, 17221, 17245, 17241]);
//         codes.set('14L', [17450, 17449, 17211, 17209, 17247, 17216]);
//         return codes;
//     }

//     function getMensCrossBraceletTeam1(key) {
//         const codes = new Map();
//         codes.set('14S', [19570, 19559, 19465, 19554, 19566, 19560]);
//         codes.set('14L', [19500, 19498, 19465, 19554, 19459, 19567]);
//         return codes;
//     }

//     function getSquareAcrylicPlaqueTeam1(key) {
//         const codes = new Map();
//         codes.set('14S', [16951, 23697, 23702, 19483, 22450, 22451, 22448]);
//         codes.set('14L', [19493, 19482, 22452, 22449, 23701, 23702, 19491]);
//         return codes;
//     }

//     function getHeartAcrylicPlaqueTeam1(key) {
//         const codes = new Map();
//         codes.set('14S', [18701, 18705, 18703, 18704, 18707, 18711, 18712]);
//         codes.set('14L', [18706, 21091, 21090, 19390, 19389, 19387, 19388]);
//         return codes;
//     }

//     function getDogTagsTeam1(key) {
//         const codes = new Map();
//         codes.set('14S', [356, 8332, 14946, 17905, 14794, 14791, 421]);
//         codes.set('14L', [394, 8313, 14952, 17695, 14799, 14802, 427]);
//         return codes;
//     }

//     //Team 2 codes
//     function getLoveKnotCodesTeam2() {
//         const codes = new Map();
//         codes.set('14S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/6.png', 17538, 12139, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/LoveKnot/ANHDC.png', 12155, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/LoveKnot/ANHMAU2.png']);
//         codes.set('14L', [12175, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/6.png', 12168, 12672, 12167, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/LoveKnot/ANHMAU4.png']);
//         codes.set('18S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/5.png', 17966, 12020, 12388, 12743, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/LoveKnot/ANHMAU5.png']);
//         codes.set('18L', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/5.png', 12386, 12381, 12664, 12027, 12074]);
//         return codes;
//     }

//     function getForeverLoveCodesTeam2() {
//         const codes = new Map();
//         codes.set('14S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/4.png', 5119, 2273, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/ForeverLove/ANHDC2.png', 8850, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/ForeverLove/ANHMAU2.png']);
//         codes.set('14L', [1719, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/4.png', 1725, 9236, 9235, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/ForeverLove/ANHMAU1.png']);
//         codes.set('18S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/3.png', 13440, 13438, 2282, 1728, 11300]);
//         codes.set('18L', [9216, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/3.png', 9212, 9214, 11301, 13451]);
//         return codes;
//     }

//     function getInterlockingHeartsCodesTeam2() {
//         const codes = new Map();
//         codes.set('14S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/8.png', 12047, 12266, 12261, 12252, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/INTERLOCKINGHEART/ANHMAU2.png']);
//         codes.set('14L', [12287, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/8.png', 12284, 12275, 12052, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/INTERLOCKINGHEART/ANHMAU4.png']);
//         codes.set('18S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/7.png', 12099, 12775, 12448, 12776, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/INTERLOCKINGHEART/ANHMAU6.png']);
//         codes.set('18L', [12106, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/7.png', 12609, 14153, 14132, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/INTERLOCKINGHEART/ANHMAU5.png']);
//         return codes;
//     }

//     function getAlluringBeautyCodesTeam2() {
//         const codes = new Map();
//         codes.set('14S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/2.png', 12196, 12214, 12197, 12209, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/AlluringBeauty/ANHMAU2.png']);
//         codes.set('14L', [12239, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/2.png', 12236, 12220, 12228, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/AlluringBeauty/ANHMAU1.png']);
//         codes.set('18S', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/1.png', 12113, 12627, 12124, 12626, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/AlluringBeauty/ANHMAU3.png']);
//         codes.set('18L', ['https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/1.png', 12121, 12607, 12124, 12628, 12412]);
//         return codes;
//     }

//     function getLuckyInLoveCodesTeam2() {
//         const codes = new Map();
//         codes.set('14S', [17471, 13527, 9775, 9752, 9756, 9758]);
//         codes.set('14L', [17474, 13547, 9778, 9923, 9742, 9758]);
//         return codes;
//     }

//     function getEternalHopeCodesTeam2() {
//         const codes = new Map();
//         codes.set('14S', [11104, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/9.png', 8707, 10061, 13888, 8718, 8689]);
//         codes.set('14L', [11105, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/9.png', 8727, 8729, 13887, 8730, 12641]);
//         return codes;
//     }

//     function getFaithCrossCodesTeam2() {
//         const codes = new Map();
//         codes.set('14S', [12570, 12572, 11348, 11347, 12569, 12573]);
//         codes.set('14L', [11354, 12577, 12579, 11357, 11356, 12578]);
//         return codes;
//     }

//     //Duy nho
//     function getAnh1DuyNho() {
//         const codes = new Map();
//         codes.set('1', [14973, 12046]);
//         return codes;
//     }

//     function getAnhListingDuyNho() {
//         const codes = new Map();
//         codes.set('AB', [12237, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/2.png', 12235, 12222, 12219, 12043]);
//         codes.set('IH', [12287, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/8.png', 12284, 12275, 12052, 'https://hehehehsss.s3.us-east-2.amazonaws.com/product-background/common-image/INTERLOCKINGHEART/ANHMAU2.png']);
//         return codes;
//     }

//     //Name Necklace
//     function getHeartNameNecklace() {
//         const codes = new Map();
//         codes.set('1', [17519, 17518, 17253, 16157, 16168, 16172]);
//         return codes;
//     }

//     function getNameNecklace() {
//         const codes = new Map();
//         codes.set('1', [17513, 17455, 15229, 15223, 15226, 15222]);
//         return codes;
//     }

//     function getVerticalNameNecklace() {
//         const codes = new Map();
//         codes.set('1', [16056, 17508, 16085, 16081, 16084, 16714]);
//         return codes;
//     }

//     function getSignatureNameNecklace() {
//         const codes = new Map();
//         codes.set('1', [17526, 17447, 17454, 15572, 16106, 16108]);
//         return codes;
//     }

//     function getAnh1NameNecklace() {
//         const codes = new Map();
//         codes.set('1', [16154, 14205, 16036, 15767]);
//         return codes;
//     }

//     //Anh 1 woman
//     function getAnh1Woman() {
//         const codes = new Map();
//         codes.set('1', [14978, 14980, 14988, 14989, 14973, 14972, 12046, 12045, 20476, 9747, 11350]);
//         return codes;
//     }

//     function getAnh1Man() {
//         const codes = new Map();
//         codes.set('1', [12082, 11570, 11645, 3421]);
//         return codes;
//     }

//     //New Nl
//     function getEndlessLoveNewNl() {
//         const codes = new Map();
//         codes.set('14S', [2165, 2145, 22491, 2147, 2122, 1698]);
//         codes.set('14L', [5400, 5398, 22491, 5399, 5397, 1698]);
//         codes.set('18S', [2166, 2146, 1703, 2123, 2150, 11278]);
//         codes.set('18L', [5404, 5402, 1703, 5401, 5403, 11278]);
//         return codes;
//     }

//     function getAnchorNewNl() {
//         const codes = new Map();
//         codes.set('14S', [2374, 2375, 22493, 2376, 2378, 1707]);
//         codes.set('14L', [5615, 5612, 22493, 5611, 5613, 1707]);
//         codes.set('18S', [2383, 2384, 1767, 2386, 2387, 1718]);
//         codes.set('18L', [5620, 5617, 1767, 5616, 5618, 1718]);
//         return codes;
//     }

//     function getGiraffesNewNl() {
//         const codes = new Map();
//         codes.set('14S', [2775, 2770, 22489, 2767, 2772, 2764]);
//         codes.set('14L', [5381, 4985, 22489, 5380, 5381, 2764]);
//         codes.set('18S', [2780, 2766, 2638, 2782, 2781, 2765]);
//         codes.set('18L', [5384, 5382, 2638, 4986, 5384, 2765]);
//         return codes;
//     }

//     function getHearToHearNewNl() {
//         const codes = new Map();
//         codes.set('14S', [3232, 3231, 22488, 3230, 3229, 11315]);
//         codes.set('14L', [3480, 3479, 22488, 3478, 3475, 11316]);
//         return codes;
//     }

//     function getPerfectPairNewNl() {
//         const codes = new Map();
//         codes.set('14S', [11170, 15505, 22486, 15501, 15492, 14388]);
//         codes.set('14L', [11177, 11176, 22486, 11184, 15516, 14391]);
//         return codes;
//     }

//     function getStethoscopeNewNl() {
//         const codes = new Map();
//         codes.set('14S', [2499, 2496, 22492, 2432, 2420, 2465]);
//         codes.set('14L', [3063, 2969, 22492, 2970, 2971, 2465]);
//         return codes;
//     }

//     function getDadMemorialNewNl() {
//         const codes = new Map();
//         codes.set('14S', [8622, 2179, 2178, 22497, 2177, 2176, 2198]);
//         codes.set('14L', [8623, 5585, 5584, 22497, 5583, 5582, 2198]);
//         codes.set('18S', [8624, 2183, 2182, 2196, 2181, 2180, 2197]);
//         codes.set('18L', [8625, 5590, 5589, 2196, 5588, 5587, 2197]);
//         return codes;
//     }

//     function getMomMemorialNewNl() {
//         const codes = new Map();
//         codes.set('14S', [8640, 2185, 2187, 22498, 2186, 2184, 2193]);
//         codes.set('14L', [8641, 5568, 5567, 22498, 5566, 5565, 2193]);
//         codes.set('18S', [8642, 2189, 2191, 2194, 2190, 2188, 2195]);
//         codes.set('18L', [8643, 5572, 5571, 2195, 5570, 5569, 2194]);
//         return codes;
//     }

//     function getAnh1NewNl() {
//         const codes = new Map();
//         codes.set('1', [4996, 4997, 4743, 4744, 2768, 2783, 5031, 11111, 4776]);
//         return codes;
//     }

//     function getLoveKnotTiktok() {
//         const codes = new Map();
//         codes.set('14S', [12061, 12024, 12044, 12018, 12135, 12134, 12660, 12671, 14163, 17967, 12386, 12388]);
//         return codes;
//     }

//     function getForeverLoveTiktok() {
//         const codes = new Map();
//         codes.set('14S', [9203, 9217, 10609, 10610, 2273, 19591, 8678, 13977, 1731, 13439, 13449, 9212]);
//         return codes;
//     }

//     function getAlluringBeautyTiktok() {
//         const codes = new Map();
//         codes.set('14S', [12058, 12037, 12053, 12034, 12215, 12237, 12212, 12056, 12127, 12112, 12607, 12413]);
//         return codes;
//     }

//     function getInterlockingHeartTiktok() {
//         const codes = new Map();
//         codes.set('14S', [12051, 12067, 12046, 12045, 12266, 12288, 12259, 12289, 12076, 12608, 12106, 12448]);
//         return codes;
//     }

//     function tempAlert(msg, duration) {
//         const el = document.createElement("h3");
//         el.setAttribute("style", "background-color:gray;text-align:center;");
//         el.innerHTML = msg;
//         setTimeout(function () {
//             el.parentNode.removeChild(el);
//         }, duration);
//         document.body.appendChild(el);
//     }

//     async function downloadImages(idOfSelector, backGroundSrcUrlSelected) {
//         tempAlert('Please wait!', 3000);
//         const backGroundSrcUrl = document.getElementById(backGroundSrcUrlSelected).value;
//         if (backGroundSrcUrl === '') {
//             return;
//         }
//         let codes;
//         switch ($('#' + idOfSelector).find(":selected").val()) {
//             case "alluring-beauty-team-1":
//                 codes = this.getAlluringBeautyCodesTeam1();
//                 break;
//             case "forever-love-team-1":
//                 codes = this.getForeverLoveCodesTeam1();
//                 break;
//             case "love-knot-team-1":
//                 codes = this.getLoveKnotCodesTeam1();
//                 break;
//             case "interlocking-hearts-team-1":
//                 codes = this.getInterlockingHeartsCodesTeam1();
//                 break;
//             case "lucky_in_love-team-1":
//                 codes = this.getLuckyInLoveCodesTeam1();
//                 break;
//             case "eternal_hope-team-1":
//                 codes = this.getEternalHopeCodesTeam1();
//                 break;
//             case "faith_cross-team-1":
//                 codes = this.getFaithCrossCodesTeam1();
//                 break;
//             case "cross-team-1":
//                 codes = this.getCrossCodesTeam1();
//                 break;
//             case "cuban-team-1":
//                 codes = this.getCubanCodesTeam1();
//                 break;
//             case "cuban-cross-team-1":
//                 codes = this.getCubanCrossCodesTeam1();
//                 break;
//             case "cross-bracelet-team-1":
//                 codes = this.getCrossBraceletCodesTeam1();
//                 break;
//             case "man-cross-bracelet-team-1":
//                 codes = this.getMensCrossBraceletTeam1();
//                 break;
//             case "square_acrylic_plaque-team-1":
//                 codes = this.getSquareAcrylicPlaqueTeam1();
//                 break;
//             case "heart_acrylic_plaque-team-1":
//                 codes = this.getHeartAcrylicPlaqueTeam1();
//                 break;
//             case "dogtag-team-1":
//                 codes = this.getDogTagsTeam1();
//                 break;
//             case "alluring-beauty-team-2":
//                 codes = this.getAlluringBeautyCodesTeam2();
//                 break;
//             case "forever-love-team-2":
//                 codes = this.getForeverLoveCodesTeam2();
//                 break;
//             case "love-knot-team-2":
//                 codes = this.getLoveKnotCodesTeam2();
//                 break;
//             case "interlocking-hearts-team-2":
//                 codes = this.getInterlockingHeartsCodesTeam2();
//                 break;
//             case "lucky_in_love-team-2":
//                 codes = this.getLuckyInLoveCodesTeam2();
//                 break;
//             case "eternal_hope-team-2":
//                 codes = this.getEternalHopeCodesTeam2();
//                 break;
//             case "faith_cross-team-2":
//                 codes = this.getFaithCrossCodesTeam2();
//                 break;
//             case "anh-1-duy-nho":
//                 codes = this.getAnh1DuyNho();
//                 break;
//             case "anh-listing-duy-nho":
//                 codes = this.getAnhListingDuyNho();
//                 break;
//             case "heart-name-necklace":
//                 codes = this.getHeartNameNecklace();
//                 break;
//             case "name-necklace":
//                 codes = this.getNameNecklace();
//                 break;
//             case "vertical-name-necklace":
//                 codes = this.getVerticalNameNecklace();
//                 break;
//             case "signature-name-necklace":
//                 codes = this.getSignatureNameNecklace();
//                 break;
//             case "anh-1-name-necklace":
//                 codes = this.getAnh1NameNecklace();
//                 break;
//             case "anh-1-woman":
//                 codes = this.getAnh1Woman();
//                 break;
//             case "anh-1-man":
//                 codes = this.getAnh1Man();
//                 break;
//             case "endless-love-new-nl":
//                 codes = this.getEndlessLoveNewNl();
//                 break;
//             case "anchor-new-nl":
//                 codes = this.getAnchorNewNl();
//                 break;
//             case "giraffes-new-nl":
//                 codes = this.getGiraffesNewNl();
//                 break;
//             case "heart-to-heart-new-nl":
//                 codes = this.getHearToHearNewNl();
//                 break;
//             case "perfect-pair-new-nl":
//                 codes = this.getPerfectPairNewNl();
//                 break;
//             case "stethoscope-new-nl":
//                 codes = this.getStethoscopeNewNl();
//                 break;
//             case "dad-memorial-new-nl":
//                 codes = this.getDadMemorialNewNl();
//                 break;
//             case "mom-memorial-new-nl":
//                 codes = this.getMomMemorialNewNl();
//                 break;
//             case "anh-1-new-nl":
//                 codes = this.getAnh1NewNl();
//                 break;
//             case "love-knot-tiktok":
//                 codes = this.getLoveKnotTiktok();
//                 break;
//             case "forever-love-tiktok":
//                 codes = this.getForeverLoveTiktok();
//                 break;
//             case "alluring-beauty-tiktok":
//                 codes = this.getAlluringBeautyTiktok();
//                 break;
//             case "interlocking-heart-tiktok":
//                 codes = this.getInterlockingHeartTiktok();
//                 break;
//             default:
//                 codes = [];
//         }

//         var count = 0;
//         for (const [key, value] of codes.entries()) {
//             for (const item of value) {
//                 count++;
//                 const countNumber = count;
//                 if (typeof item === 'string') {
//                     downloadImage(countNumber, item, key)
//                 } else {
//                     // Use await here to wait for the AJAX request to complete
//                     // await new Promise((resolve, reject) => {
//                     $.ajax({
//                         url: shineOnUrl(item),
//                         type: "POST",
//                         headers: {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYmE3MzJkMDg2NzExNzhjMjljNjAzNGE5YmJhYTNhNjc3ZWY1MjljNzNmNDBiODg3ODc3ZjgyZjMwODM3ODczM2M0NjM0NjkyNTdjNWY3ODciLCJpYXQiOjE3NTIxNDYwOTIuNDM0ODg3LCJuYmYiOjE3NTIxNDYwOTIuNDM0ODg5LCJleHAiOjIwNjc2Nzg4OTIuNDI4Njc5LCJzdWIiOiIyMDg2NjkiLCJzY29wZXMiOlsicmVhZF9zaG9wIiwicmVhZF9vcmRlcnMiLCJyZWFkX3Byb2R1Y3RfdGVtcGxhdGVzIiwicmVhZF90cmFuc2Zvcm1hdGlvbnMiLCJ3cml0ZV9hcnR3b3JrIiwid3JpdGVfc2t1cyIsIndyaXRlX29yZGVycyIsIndyaXRlX2NyZWRpdHMiXX0.HFYBJFiHqmO29SYqTeAx0ZrFODeQSqTcSRJa7h2MUc34RM_cg2UPl1mde0A9nV8Q8WXRHvsbALVf7yMqzPszuugolebAtOSlJ7z2717AHsnx_8S6dPOZrUGtoHFlLNQchYxUJZX5e_gklHe5BjhtfVhghKfFG7ZCluiyDoQ3zP000G9fJUQk4tpPpPszgvc14tSOCtktMwLF1mI76b--K49jU6vs9OV8lMC5v-HMhPe-fPOozNZ66PVym86dm9PJ5fLv64sAU91F40BXIZB14Iuwcq1m4ZEWLZ-_OTtB7wIapLj8Tg__HgR972tiRpW0XRZni8Em-aJl2JpfTlwTzYKh9WckOJjWYlImKRnKA1OxlYPOZ_VY0hxZBzNYBlvk9jyQCicK1uu6uSykU7RRyqZHWqvbX667Xf52ixt5p8QDtlc-VSXnMyl5rs0a3e9A47Lgy3JVQ5pKA8s88RQxPeydeghl6mqTYv-8zVe1QpHUVKNC7CIQCrWbDscEAH9h_MekPhutq11CZ3T-1Fh1uI7J5H0Uj0HFVbytdA9YxkESKOO4xfHykzrsx_810PjLZc7LHTYWDhSRznRI_pVAVyMuoNmfkvFw8oFZuROg1XYZy54LCqUvvhHk9YSK6Rov1FzVSSlbNVNXEcjxpKAD9WOn5vv9diub8-mmQmY_mLo"},
//                         data: {
//                             "src": "https://hehehehsss.s3.us-east-2.amazonaws.com/hien/background/Jul2023/1st/1/DS2.jpg",
//                         },
//                         success: async function (response) {
//                             const responseUrl = response.render.make.src;
//                             downloadImage(countNumber, responseUrl, key);

//                             resolve();
//                         },
//                         error: function (error) {
//                             // ... (handle the error)
//                             reject();  // Reject the promise when the AJAX request fails
//                         }
//                     })
//                     // })
//                 }
//             }
//         }

//         let audio = new Audio('complete-sound.mp3');
//         await audio.play();
//     }
