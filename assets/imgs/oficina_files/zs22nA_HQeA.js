;/*FB_PKG_DELIM*/

__d("PolarisStoriesV3HighlightsPageQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7687303954625375"}),null);
__d("PolarisStoriesV3HighlightsPageQuery$Parameters",["PolarisStoriesV3HighlightsPageQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PolarisStoriesV3HighlightsPageQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisStoriesV3HighlightsPageQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisStoriesV3HighlightsRoot.entrypoint",["JSResourceForInteraction","PolarisStoriesV3HighlightsPageQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b,d=a.passthroughProps;a=a.routeProps.highlight_id;b=(b=d==null?void 0:d.initialHighlightIdParam)!=null?b:a;a=d==null?void 0:d.highlightIds;var e;if(a!=null){e="Gallery";d=(d==null?void 0:d.isSmallScreen)===!0?{first:1}:{first:3,last:2};d=babelHelpers["extends"]({initial_reel_id:b,reel_ids:a},d)}else e="Standalone",d={first:1,initial_reel_id:b,reel_ids:[b]};return{extraProps:{highlightIds:a,initialHighlightId:b,variant:e},queries:{query:{parameters:c("PolarisStoriesV3HighlightsPageQuery$Parameters"),variables:d}}}},root:c("JSResourceForInteraction")("PolarisStoriesV3HighlightsRoot.react").__setRef("PolarisStoriesV3HighlightsRoot.entrypoint")};g["default"]=a}),98);