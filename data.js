// Values transcribed from Keywords_1.png. The clipped final column is omitted.
// The gray source rows are expandable subrecords of the last white row, per the design clarification.
const columns = [
 ['keyword','Keyword',182],['match','Match type',152],['campaign','Campaign',188],['group','Ad group',154],['status','Status',110],['maxCpc','Max. CPC',110],['account','Account',190],['url','Final URL',180],['cpv','TrueView avg. CPV',124],['cpm','Avg. CPM',132],['interactions','Interactions',130],['interactionRate','Interaction rate',128],['avgCost','Avg. cost',120],['cost','Cost',140],['impressions','Impr.',125],['clicks','Clicks',120],['conversionRate','Conv. rate',120],['conversionValue','Conv. value',135]
];
const sourceRows = [
 ['[keyword a]','Exact match','Campaign C','Ad group E','H','802-724-9053','$765.75',90155,29.58,'$9.46','$87,518.99',84853,90155,99.83,93520.74],
 ['keyword b','Broad match','Campaign A','Ad group F','G','616-011-4543','NT$552.33',6507,1.07,'NT$48.51','NT$28,785.72',79845,6507,45.29,0],
 ['[keyword c]','Exact match','Campaign V','Ad group I','N','267-291-5656','$695.96',1126,25.48,'$4.08','$36,446.53',14866,1126,97.38,0],
 ['[keyword a]','Exact match','Campaign G','Ad group E','H','802-724-9053','$392.66',3813,58.74,'$7.50','$84,174.60',32964,3813,52.57,73329.83],
 ['keyword d','Broad match','Campaign S','Ad group K','B','928-714-5599','$51.75',5232,4.80,'$0.65','$5,028.58',847380,5232,61.23,0],
 ['[keyword e]','Exact match','Campaign E','Ad group J','K','420-960-8675','$401.68',2997,1.36,'$6.52','$50,534.31',33383,2997,74.77,94474.02],
 ['[keyword c]','Exact match','Campaign AI','Ad group I','N','267-291-5656','$604.69',1928,99.61,'$3.69','$4,435.40',50096,1928,63.42,0],
 ['keyword f','Broad match','Campaign U','Ad group D','B','928-714-5599','$80.52',9968,5.49,'$0.06','$3,206.81',55420,9968,84.96,0],
 ['"keyword g"','Phrase match','Campaign U','Ad group D','B','928-714-5599','$73.28',7329,7.65,'$0.90','$1,024.14',71317,7329,49.09,0],
 ['keyword h','Broad match','Campaign A','Ad group H','G','616-011-4543','NT$1,288.27',5665,1.62,'NT$40.88','NT$13,174.94',84820,5665,30.81,0]
].map((r,i)=>({id:i+1,keyword:r[0],match:r[1],campaign:r[2],group:r[3],account:'Ad account '+r[4],accountId:r[5],cpm:r[6],interactions:r[7],interactionRate:r[8],avgCost:r[9],cost:r[10],impressions:r[11],clicks:r[12],conversionRate:r[13],conversionValue:r[14],status:'Eligible',enabled:'Enabled',maxCpc:'—',url:'—',cpv:'—',experiment:i===3,campaignParent:i===3?'Campaign C':null}));
const sourceSubrecords = [
 [276888,9.25,6737131,276888,58.78,906343.34],
 [509392,5.82,3258451,509392,62.35,548383.20],
 [277833,3.11,2153853,155914,65.85,721477.94],
 [55030,7.94,188004,55030,98.13,32184.36],
 [46021,8.39,645907,46021,93.13,1620.55],
 [0,null,0,0,0,0],
 [7694365,21.72,81753442,338730,6.46,185847.71]
].map((r,i)=>({id:'detail'+i,parentId:10,keyword:'Total...',interactions:r[0],interactionRate:r[1],impressions:r[2],clicks:r[3],conversionRate:r[4],conversionValue:r[5],engagements:i===6}));
