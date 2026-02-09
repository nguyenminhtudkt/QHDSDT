var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleTraffic_1 = new ol.layer.Tile({
            'title': 'Google Traffic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_2 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_4 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_5 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_6 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Layer_CcTuynmi_7 = new ol.format.GeoJSON();
var features_Layer_CcTuynmi_7 = format_Layer_CcTuynmi_7.readFeatures(json_Layer_CcTuynmi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_CcTuynmi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_CcTuynmi_7.addFeatures(features_Layer_CcTuynmi_7);
var lyr_Layer_CcTuynmi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_CcTuynmi_7, 
                style: style_Layer_CcTuynmi_7,
                popuplayertitle: 'Layer_Các Tuyến mới',
                interactive: true,
                title: '<img src="styles/legend/Layer_CcTuynmi_7.png" /> Layer_Các Tuyến mới'
            });
var format_Layer_Tuyn12_8 = new ol.format.GeoJSON();
var features_Layer_Tuyn12_8 = format_Layer_Tuyn12_8.readFeatures(json_Layer_Tuyn12_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn12_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn12_8.addFeatures(features_Layer_Tuyn12_8);
var lyr_Layer_Tuyn12_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn12_8, 
                style: style_Layer_Tuyn12_8,
                popuplayertitle: 'Layer_Tuyến 12',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn12_8.png" /> Layer_Tuyến 12'
            });
var format_Layer_Tuyn11_9 = new ol.format.GeoJSON();
var features_Layer_Tuyn11_9 = format_Layer_Tuyn11_9.readFeatures(json_Layer_Tuyn11_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn11_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn11_9.addFeatures(features_Layer_Tuyn11_9);
var lyr_Layer_Tuyn11_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn11_9, 
                style: style_Layer_Tuyn11_9,
                popuplayertitle: 'Layer_Tuyến 11',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn11_9.png" /> Layer_Tuyến 11'
            });
var format_Layer_Tuyn10_10 = new ol.format.GeoJSON();
var features_Layer_Tuyn10_10 = format_Layer_Tuyn10_10.readFeatures(json_Layer_Tuyn10_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn10_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn10_10.addFeatures(features_Layer_Tuyn10_10);
var lyr_Layer_Tuyn10_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn10_10, 
                style: style_Layer_Tuyn10_10,
                popuplayertitle: 'Layer_Tuyến 10',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn10_10.png" /> Layer_Tuyến 10'
            });
var format_Layer_Tuyn9_11 = new ol.format.GeoJSON();
var features_Layer_Tuyn9_11 = format_Layer_Tuyn9_11.readFeatures(json_Layer_Tuyn9_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn9_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn9_11.addFeatures(features_Layer_Tuyn9_11);
var lyr_Layer_Tuyn9_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn9_11, 
                style: style_Layer_Tuyn9_11,
                popuplayertitle: 'Layer_Tuyến 9',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn9_11.png" /> Layer_Tuyến 9'
            });
var format_Layer_Tuyn8_12 = new ol.format.GeoJSON();
var features_Layer_Tuyn8_12 = format_Layer_Tuyn8_12.readFeatures(json_Layer_Tuyn8_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn8_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn8_12.addFeatures(features_Layer_Tuyn8_12);
var lyr_Layer_Tuyn8_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn8_12, 
                style: style_Layer_Tuyn8_12,
                popuplayertitle: 'Layer_Tuyến 8',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn8_12.png" /> Layer_Tuyến 8'
            });
var format_Layer_Tuyn7_13 = new ol.format.GeoJSON();
var features_Layer_Tuyn7_13 = format_Layer_Tuyn7_13.readFeatures(json_Layer_Tuyn7_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn7_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn7_13.addFeatures(features_Layer_Tuyn7_13);
var lyr_Layer_Tuyn7_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn7_13, 
                style: style_Layer_Tuyn7_13,
                popuplayertitle: 'Layer_Tuyến 7',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn7_13.png" /> Layer_Tuyến 7'
            });
var format_Layer_Tuyn6_14 = new ol.format.GeoJSON();
var features_Layer_Tuyn6_14 = format_Layer_Tuyn6_14.readFeatures(json_Layer_Tuyn6_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn6_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn6_14.addFeatures(features_Layer_Tuyn6_14);
var lyr_Layer_Tuyn6_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn6_14, 
                style: style_Layer_Tuyn6_14,
                popuplayertitle: 'Layer_Tuyến 6',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn6_14.png" /> Layer_Tuyến 6'
            });
var format_Layer_Tuyn5_15 = new ol.format.GeoJSON();
var features_Layer_Tuyn5_15 = format_Layer_Tuyn5_15.readFeatures(json_Layer_Tuyn5_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn5_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn5_15.addFeatures(features_Layer_Tuyn5_15);
var lyr_Layer_Tuyn5_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn5_15, 
                style: style_Layer_Tuyn5_15,
                popuplayertitle: 'Layer_Tuyến 5',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn5_15.png" /> Layer_Tuyến 5'
            });
var format_Layer_Tuyn4_16 = new ol.format.GeoJSON();
var features_Layer_Tuyn4_16 = format_Layer_Tuyn4_16.readFeatures(json_Layer_Tuyn4_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn4_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn4_16.addFeatures(features_Layer_Tuyn4_16);
var lyr_Layer_Tuyn4_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn4_16, 
                style: style_Layer_Tuyn4_16,
                popuplayertitle: 'Layer_Tuyến 4',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn4_16.png" /> Layer_Tuyến 4'
            });
var format_Layer_Tuyn3_17 = new ol.format.GeoJSON();
var features_Layer_Tuyn3_17 = format_Layer_Tuyn3_17.readFeatures(json_Layer_Tuyn3_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn3_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn3_17.addFeatures(features_Layer_Tuyn3_17);
var lyr_Layer_Tuyn3_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn3_17, 
                style: style_Layer_Tuyn3_17,
                popuplayertitle: 'Layer_Tuyến 3',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn3_17.png" /> Layer_Tuyến 3'
            });
var format_Layer_Tuyn2A_18 = new ol.format.GeoJSON();
var features_Layer_Tuyn2A_18 = format_Layer_Tuyn2A_18.readFeatures(json_Layer_Tuyn2A_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn2A_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn2A_18.addFeatures(features_Layer_Tuyn2A_18);
var lyr_Layer_Tuyn2A_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn2A_18, 
                style: style_Layer_Tuyn2A_18,
                popuplayertitle: 'Layer_Tuyến 2A',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn2A_18.png" /> Layer_Tuyến 2A'
            });
var format_Layer_Tuyn2_19 = new ol.format.GeoJSON();
var features_Layer_Tuyn2_19 = format_Layer_Tuyn2_19.readFeatures(json_Layer_Tuyn2_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn2_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn2_19.addFeatures(features_Layer_Tuyn2_19);
var lyr_Layer_Tuyn2_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn2_19, 
                style: style_Layer_Tuyn2_19,
                popuplayertitle: 'Layer_Tuyến 2',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn2_19.png" /> Layer_Tuyến 2'
            });
var format_Layer_Tuyn1_20 = new ol.format.GeoJSON();
var features_Layer_Tuyn1_20 = format_Layer_Tuyn1_20.readFeatures(json_Layer_Tuyn1_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_Tuyn1_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_Tuyn1_20.addFeatures(features_Layer_Tuyn1_20);
var lyr_Layer_Tuyn1_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer_Tuyn1_20, 
                style: style_Layer_Tuyn1_20,
                popuplayertitle: 'Layer_Tuyến 1',
                interactive: true,
                title: '<img src="styles/legend/Layer_Tuyn1_20.png" /> Layer_Tuyến 1'
            });
var format_T12layer_T12_21 = new ol.format.GeoJSON();
var features_T12layer_T12_21 = format_T12layer_T12_21.readFeatures(json_T12layer_T12_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T12layer_T12_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T12layer_T12_21.addFeatures(features_T12layer_T12_21);
var lyr_T12layer_T12_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T12layer_T12_21, 
                style: style_T12layer_T12_21,
                popuplayertitle: 'T12 — layer_T12',
                interactive: true,
                title: '<img src="styles/legend/T12layer_T12_21.png" /> T12 — layer_T12'
            });
var format_T11layer_T11_22 = new ol.format.GeoJSON();
var features_T11layer_T11_22 = format_T11layer_T11_22.readFeatures(json_T11layer_T11_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T11layer_T11_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T11layer_T11_22.addFeatures(features_T11layer_T11_22);
var lyr_T11layer_T11_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T11layer_T11_22, 
                style: style_T11layer_T11_22,
                popuplayertitle: 'T11 — layer_T11',
                interactive: true,
                title: '<img src="styles/legend/T11layer_T11_22.png" /> T11 — layer_T11'
            });
var format_T10layer_T10_23 = new ol.format.GeoJSON();
var features_T10layer_T10_23 = format_T10layer_T10_23.readFeatures(json_T10layer_T10_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T10layer_T10_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T10layer_T10_23.addFeatures(features_T10layer_T10_23);
var lyr_T10layer_T10_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T10layer_T10_23, 
                style: style_T10layer_T10_23,
                popuplayertitle: 'T10 — layer_T10',
                interactive: true,
                title: '<img src="styles/legend/T10layer_T10_23.png" /> T10 — layer_T10'
            });
var format_T9layer_T9_24 = new ol.format.GeoJSON();
var features_T9layer_T9_24 = format_T9layer_T9_24.readFeatures(json_T9layer_T9_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T9layer_T9_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T9layer_T9_24.addFeatures(features_T9layer_T9_24);
var lyr_T9layer_T9_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T9layer_T9_24, 
                style: style_T9layer_T9_24,
                popuplayertitle: 'T9 — layer_T9',
                interactive: true,
                title: '<img src="styles/legend/T9layer_T9_24.png" /> T9 — layer_T9'
            });
var format_T8layer_T8_25 = new ol.format.GeoJSON();
var features_T8layer_T8_25 = format_T8layer_T8_25.readFeatures(json_T8layer_T8_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T8layer_T8_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T8layer_T8_25.addFeatures(features_T8layer_T8_25);
var lyr_T8layer_T8_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T8layer_T8_25, 
                style: style_T8layer_T8_25,
                popuplayertitle: 'T8 — layer_T8',
                interactive: true,
                title: '<img src="styles/legend/T8layer_T8_25.png" /> T8 — layer_T8'
            });
var format_T7layer_T7_26 = new ol.format.GeoJSON();
var features_T7layer_T7_26 = format_T7layer_T7_26.readFeatures(json_T7layer_T7_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T7layer_T7_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T7layer_T7_26.addFeatures(features_T7layer_T7_26);
var lyr_T7layer_T7_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T7layer_T7_26, 
                style: style_T7layer_T7_26,
                popuplayertitle: 'T7 — layer_T7',
                interactive: true,
                title: '<img src="styles/legend/T7layer_T7_26.png" /> T7 — layer_T7'
            });
var format_T6layer_T6_27 = new ol.format.GeoJSON();
var features_T6layer_T6_27 = format_T6layer_T6_27.readFeatures(json_T6layer_T6_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T6layer_T6_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T6layer_T6_27.addFeatures(features_T6layer_T6_27);
var lyr_T6layer_T6_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T6layer_T6_27, 
                style: style_T6layer_T6_27,
                popuplayertitle: 'T6 — layer_T6',
                interactive: true,
                title: '<img src="styles/legend/T6layer_T6_27.png" /> T6 — layer_T6'
            });
var format_T5layer_T5_28 = new ol.format.GeoJSON();
var features_T5layer_T5_28 = format_T5layer_T5_28.readFeatures(json_T5layer_T5_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T5layer_T5_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T5layer_T5_28.addFeatures(features_T5layer_T5_28);
var lyr_T5layer_T5_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T5layer_T5_28, 
                style: style_T5layer_T5_28,
                popuplayertitle: 'T5 — layer_T5',
                interactive: true,
                title: '<img src="styles/legend/T5layer_T5_28.png" /> T5 — layer_T5'
            });
var format_T4layer_T4_29 = new ol.format.GeoJSON();
var features_T4layer_T4_29 = format_T4layer_T4_29.readFeatures(json_T4layer_T4_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T4layer_T4_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T4layer_T4_29.addFeatures(features_T4layer_T4_29);
var lyr_T4layer_T4_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T4layer_T4_29, 
                style: style_T4layer_T4_29,
                popuplayertitle: 'T4 — layer_T4',
                interactive: true,
                title: '<img src="styles/legend/T4layer_T4_29.png" /> T4 — layer_T4'
            });
var format_T33layer_T3_30 = new ol.format.GeoJSON();
var features_T33layer_T3_30 = format_T33layer_T3_30.readFeatures(json_T33layer_T3_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T33layer_T3_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T33layer_T3_30.addFeatures(features_T33layer_T3_30);
var lyr_T33layer_T3_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T33layer_T3_30, 
                style: style_T33layer_T3_30,
                popuplayertitle: 'T3.3 — layer_T3',
                interactive: true,
                title: '<img src="styles/legend/T33layer_T3_30.png" /> T3.3 — layer_T3'
            });
var format_T32layer_T3_31 = new ol.format.GeoJSON();
var features_T32layer_T3_31 = format_T32layer_T3_31.readFeatures(json_T32layer_T3_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T32layer_T3_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T32layer_T3_31.addFeatures(features_T32layer_T3_31);
var lyr_T32layer_T3_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T32layer_T3_31, 
                style: style_T32layer_T3_31,
                popuplayertitle: 'T3.2 — layer_T3',
                interactive: true,
                title: '<img src="styles/legend/T32layer_T3_31.png" /> T3.2 — layer_T3'
            });
var format_T31layer_T3_32 = new ol.format.GeoJSON();
var features_T31layer_T3_32 = format_T31layer_T3_32.readFeatures(json_T31layer_T3_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T31layer_T3_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T31layer_T3_32.addFeatures(features_T31layer_T3_32);
var lyr_T31layer_T3_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T31layer_T3_32, 
                style: style_T31layer_T3_32,
                popuplayertitle: 'T3.1 — layer_T3',
                interactive: true,
                title: '<img src="styles/legend/T31layer_T3_32.png" /> T3.1 — layer_T3'
            });
var format_T2Aextlayer_T2Aext_33 = new ol.format.GeoJSON();
var features_T2Aextlayer_T2Aext_33 = format_T2Aextlayer_T2Aext_33.readFeatures(json_T2Aextlayer_T2Aext_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2Aextlayer_T2Aext_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2Aextlayer_T2Aext_33.addFeatures(features_T2Aextlayer_T2Aext_33);
var lyr_T2Aextlayer_T2Aext_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2Aextlayer_T2Aext_33, 
                style: style_T2Aextlayer_T2Aext_33,
                popuplayertitle: 'T2Aext — layer_T2Aext',
                interactive: true,
                title: '<img src="styles/legend/T2Aextlayer_T2Aext_33.png" /> T2Aext — layer_T2Aext'
            });
var format_T2Alayer_T2A_34 = new ol.format.GeoJSON();
var features_T2Alayer_T2A_34 = format_T2Alayer_T2A_34.readFeatures(json_T2Alayer_T2A_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2Alayer_T2A_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2Alayer_T2A_34.addFeatures(features_T2Alayer_T2A_34);
var lyr_T2Alayer_T2A_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2Alayer_T2A_34, 
                style: style_T2Alayer_T2A_34,
                popuplayertitle: 'T2A — layer_T2A',
                interactive: true,
                title: '<img src="styles/legend/T2Alayer_T2A_34.png" /> T2A — layer_T2A'
            });
var format_T24layer_T2_35 = new ol.format.GeoJSON();
var features_T24layer_T2_35 = format_T24layer_T2_35.readFeatures(json_T24layer_T2_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T24layer_T2_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T24layer_T2_35.addFeatures(features_T24layer_T2_35);
var lyr_T24layer_T2_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T24layer_T2_35, 
                style: style_T24layer_T2_35,
                popuplayertitle: 'T2.4 — layer_T2',
                interactive: true,
                title: '<img src="styles/legend/T24layer_T2_35.png" /> T2.4 — layer_T2'
            });
var format_T23layer_T2_36 = new ol.format.GeoJSON();
var features_T23layer_T2_36 = format_T23layer_T2_36.readFeatures(json_T23layer_T2_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T23layer_T2_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T23layer_T2_36.addFeatures(features_T23layer_T2_36);
var lyr_T23layer_T2_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T23layer_T2_36, 
                style: style_T23layer_T2_36,
                popuplayertitle: 'T2.3 — layer_T2',
                interactive: true,
                title: '<img src="styles/legend/T23layer_T2_36.png" /> T2.3 — layer_T2'
            });
var format_T22layer_T2_37 = new ol.format.GeoJSON();
var features_T22layer_T2_37 = format_T22layer_T2_37.readFeatures(json_T22layer_T2_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T22layer_T2_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T22layer_T2_37.addFeatures(features_T22layer_T2_37);
var lyr_T22layer_T2_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T22layer_T2_37, 
                style: style_T22layer_T2_37,
                popuplayertitle: 'T2.2 — layer_T2',
                interactive: true,
                title: '<img src="styles/legend/T22layer_T2_37.png" /> T2.2 — layer_T2'
            });
var format_T21layer_T2_38 = new ol.format.GeoJSON();
var features_T21layer_T2_38 = format_T21layer_T2_38.readFeatures(json_T21layer_T2_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T21layer_T2_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T21layer_T2_38.addFeatures(features_T21layer_T2_38);
var lyr_T21layer_T2_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T21layer_T2_38, 
                style: style_T21layer_T2_38,
                popuplayertitle: 'T2.1 — layer_T2',
                interactive: true,
                title: '<img src="styles/legend/T21layer_T2_38.png" /> T2.1 — layer_T2'
            });
var format_T1Alayer_T1A_39 = new ol.format.GeoJSON();
var features_T1Alayer_T1A_39 = format_T1Alayer_T1A_39.readFeatures(json_T1Alayer_T1A_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1Alayer_T1A_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1Alayer_T1A_39.addFeatures(features_T1Alayer_T1A_39);
var lyr_T1Alayer_T1A_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1Alayer_T1A_39, 
                style: style_T1Alayer_T1A_39,
                popuplayertitle: 'T1A — layer_T1A',
                interactive: true,
                title: '<img src="styles/legend/T1Alayer_T1A_39.png" /> T1A — layer_T1A'
            });
var format_T1layer_T1_40 = new ol.format.GeoJSON();
var features_T1layer_T1_40 = format_T1layer_T1_40.readFeatures(json_T1layer_T1_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T1layer_T1_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T1layer_T1_40.addFeatures(features_T1layer_T1_40);
var lyr_T1layer_T1_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T1layer_T1_40, 
                style: style_T1layer_T1_40,
                popuplayertitle: 'T1 — layer_T1',
                interactive: true,
                title: '<img src="styles/legend/T1layer_T1_40.png" /> T1 — layer_T1'
            });
var format_Line5PAtuyenkml_41 = new ol.format.GeoJSON();
var features_Line5PAtuyenkml_41 = format_Line5PAtuyenkml_41.readFeatures(json_Line5PAtuyenkml_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line5PAtuyenkml_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line5PAtuyenkml_41.addFeatures(features_Line5PAtuyenkml_41);
var lyr_Line5PAtuyenkml_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line5PAtuyenkml_41, 
                style: style_Line5PAtuyenkml_41,
                popuplayertitle: 'Line 5 PA tuyen.kml',
                interactive: true,
                title: 'Line 5 PA tuyen.kml'
            });
var format_Line5PAtuyenkml_42 = new ol.format.GeoJSON();
var features_Line5PAtuyenkml_42 = format_Line5PAtuyenkml_42.readFeatures(json_Line5PAtuyenkml_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line5PAtuyenkml_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line5PAtuyenkml_42.addFeatures(features_Line5PAtuyenkml_42);
var lyr_Line5PAtuyenkml_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line5PAtuyenkml_42, 
                style: style_Line5PAtuyenkml_42,
                popuplayertitle: 'Line 5 PA tuyen.kml',
                interactive: true,
                title: 'Line 5 PA tuyen.kml'
            });
var format_Line5PAtuyenkml_43 = new ol.format.GeoJSON();
var features_Line5PAtuyenkml_43 = format_Line5PAtuyenkml_43.readFeatures(json_Line5PAtuyenkml_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line5PAtuyenkml_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line5PAtuyenkml_43.addFeatures(features_Line5PAtuyenkml_43);
var lyr_Line5PAtuyenkml_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line5PAtuyenkml_43, 
                style: style_Line5PAtuyenkml_43,
                popuplayertitle: 'Line 5 PA tuyen.kml',
                interactive: true,
                title: '<img src="styles/legend/Line5PAtuyenkml_43.png" /> Line 5 PA tuyen.kml'
            });
var format_Line32DepotYenSo_44 = new ol.format.GeoJSON();
var features_Line32DepotYenSo_44 = format_Line32DepotYenSo_44.readFeatures(json_Line32DepotYenSo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32DepotYenSo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32DepotYenSo_44.addFeatures(features_Line32DepotYenSo_44);
var lyr_Line32DepotYenSo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32DepotYenSo_44, 
                style: style_Line32DepotYenSo_44,
                popuplayertitle: 'Line 3.2 Depot Yen So',
                interactive: true,
                title: 'Line 3.2 Depot Yen So'
            });
var format_Line32GaPolygon_45 = new ol.format.GeoJSON();
var features_Line32GaPolygon_45 = format_Line32GaPolygon_45.readFeatures(json_Line32GaPolygon_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32GaPolygon_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32GaPolygon_45.addFeatures(features_Line32GaPolygon_45);
var lyr_Line32GaPolygon_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32GaPolygon_45, 
                style: style_Line32GaPolygon_45,
                popuplayertitle: 'Line 3.2 Ga-Polygon',
                interactive: true,
                title: 'Line 3.2 Ga-Polygon'
            });
var format_Line32TuyenLinestring_46 = new ol.format.GeoJSON();
var features_Line32TuyenLinestring_46 = format_Line32TuyenLinestring_46.readFeatures(json_Line32TuyenLinestring_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32TuyenLinestring_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32TuyenLinestring_46.addFeatures(features_Line32TuyenLinestring_46);
var lyr_Line32TuyenLinestring_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32TuyenLinestring_46, 
                style: style_Line32TuyenLinestring_46,
                popuplayertitle: 'Line 3.2 Tuyen-Linestring',
                interactive: true,
                title: 'Line 3.2 Tuyen-Linestring'
            });
var format_Line32DepotYenSo_47 = new ol.format.GeoJSON();
var features_Line32DepotYenSo_47 = format_Line32DepotYenSo_47.readFeatures(json_Line32DepotYenSo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32DepotYenSo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32DepotYenSo_47.addFeatures(features_Line32DepotYenSo_47);
var lyr_Line32DepotYenSo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32DepotYenSo_47, 
                style: style_Line32DepotYenSo_47,
                popuplayertitle: 'Line 3.2 Depot Yen So',
                interactive: true,
                title: 'Line 3.2 Depot Yen So'
            });
var format_Line32GaPoint_48 = new ol.format.GeoJSON();
var features_Line32GaPoint_48 = format_Line32GaPoint_48.readFeatures(json_Line32GaPoint_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32GaPoint_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32GaPoint_48.addFeatures(features_Line32GaPoint_48);
var lyr_Line32GaPoint_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32GaPoint_48, 
                style: style_Line32GaPoint_48,
                popuplayertitle: 'Line 3.2 Ga-Point',
                interactive: true,
                title: '<img src="styles/legend/Line32GaPoint_48.png" /> Line 3.2 Ga-Point'
            });
var format_T2AextGaPolygon_49 = new ol.format.GeoJSON();
var features_T2AextGaPolygon_49 = format_T2AextGaPolygon_49.readFeatures(json_T2AextGaPolygon_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2AextGaPolygon_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2AextGaPolygon_49.addFeatures(features_T2AextGaPolygon_49);
var lyr_T2AextGaPolygon_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2AextGaPolygon_49, 
                style: style_T2AextGaPolygon_49,
                popuplayertitle: 'T2Aext-Ga Polygon',
                interactive: true,
                title: 'T2Aext-Ga Polygon'
            });
var format_T2AextGaPoint_50 = new ol.format.GeoJSON();
var features_T2AextGaPoint_50 = format_T2AextGaPoint_50.readFeatures(json_T2AextGaPoint_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T2AextGaPoint_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T2AextGaPoint_50.addFeatures(features_T2AextGaPoint_50);
var lyr_T2AextGaPoint_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T2AextGaPoint_50, 
                style: style_T2AextGaPoint_50,
                popuplayertitle: 'T2Aext-Ga Point',
                interactive: true,
                title: '<img src="styles/legend/T2AextGaPoint_50.png" /> T2Aext-Ga Point'
            });
var format_Line23DepotSocSon_51 = new ol.format.GeoJSON();
var features_Line23DepotSocSon_51 = format_Line23DepotSocSon_51.readFeatures(json_Line23DepotSocSon_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23DepotSocSon_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23DepotSocSon_51.addFeatures(features_Line23DepotSocSon_51);
var lyr_Line23DepotSocSon_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23DepotSocSon_51, 
                style: style_Line23DepotSocSon_51,
                popuplayertitle: 'Line 2.3 Depot Soc Son',
                interactive: true,
                title: 'Line 2.3 Depot Soc Son'
            });
var format_Line23GaPolygon_52 = new ol.format.GeoJSON();
var features_Line23GaPolygon_52 = format_Line23GaPolygon_52.readFeatures(json_Line23GaPolygon_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23GaPolygon_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23GaPolygon_52.addFeatures(features_Line23GaPolygon_52);
var lyr_Line23GaPolygon_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23GaPolygon_52, 
                style: style_Line23GaPolygon_52,
                popuplayertitle: 'Line 2.3 Ga-Polygon',
                interactive: true,
                title: 'Line 2.3 Ga-Polygon'
            });
var format_Line23TuyenLinestring_53 = new ol.format.GeoJSON();
var features_Line23TuyenLinestring_53 = format_Line23TuyenLinestring_53.readFeatures(json_Line23TuyenLinestring_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23TuyenLinestring_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23TuyenLinestring_53.addFeatures(features_Line23TuyenLinestring_53);
var lyr_Line23TuyenLinestring_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23TuyenLinestring_53, 
                style: style_Line23TuyenLinestring_53,
                popuplayertitle: 'Line 2.3 Tuyen-Linestring',
                interactive: true,
                title: 'Line 2.3 Tuyen-Linestring'
            });
var format_Line23DepotSocSon_54 = new ol.format.GeoJSON();
var features_Line23DepotSocSon_54 = format_Line23DepotSocSon_54.readFeatures(json_Line23DepotSocSon_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23DepotSocSon_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23DepotSocSon_54.addFeatures(features_Line23DepotSocSon_54);
var lyr_Line23DepotSocSon_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23DepotSocSon_54, 
                style: style_Line23DepotSocSon_54,
                popuplayertitle: 'Line 2.3 Depot Soc Son',
                interactive: true,
                title: 'Line 2.3 Depot Soc Son'
            });
var format_Line23GaPoint_55 = new ol.format.GeoJSON();
var features_Line23GaPoint_55 = format_Line23GaPoint_55.readFeatures(json_Line23GaPoint_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23GaPoint_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23GaPoint_55.addFeatures(features_Line23GaPoint_55);
var lyr_Line23GaPoint_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23GaPoint_55, 
                style: style_Line23GaPoint_55,
                popuplayertitle: 'Line 2.3 Ga-Point',
                interactive: true,
                title: '<img src="styles/legend/Line23GaPoint_55.png" /> Line 2.3 Ga-Point'
            });
var format_Line22GaPolygon_56 = new ol.format.GeoJSON();
var features_Line22GaPolygon_56 = format_Line22GaPolygon_56.readFeatures(json_Line22GaPolygon_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line22GaPolygon_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line22GaPolygon_56.addFeatures(features_Line22GaPolygon_56);
var lyr_Line22GaPolygon_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line22GaPolygon_56, 
                style: style_Line22GaPolygon_56,
                popuplayertitle: 'Line 2.2 Ga-Polygon',
                interactive: true,
                title: 'Line 2.2 Ga-Polygon'
            });
var format_Line22TuyenLinestring_57 = new ol.format.GeoJSON();
var features_Line22TuyenLinestring_57 = format_Line22TuyenLinestring_57.readFeatures(json_Line22TuyenLinestring_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line22TuyenLinestring_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line22TuyenLinestring_57.addFeatures(features_Line22TuyenLinestring_57);
var lyr_Line22TuyenLinestring_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line22TuyenLinestring_57, 
                style: style_Line22TuyenLinestring_57,
                popuplayertitle: 'Line 2.2 Tuyen-Linestring',
                interactive: true,
                title: 'Line 2.2 Tuyen-Linestring'
            });
var format_Line22GaPoint_58 = new ol.format.GeoJSON();
var features_Line22GaPoint_58 = format_Line22GaPoint_58.readFeatures(json_Line22GaPoint_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line22GaPoint_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line22GaPoint_58.addFeatures(features_Line22GaPoint_58);
var lyr_Line22GaPoint_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line22GaPoint_58, 
                style: style_Line22GaPoint_58,
                popuplayertitle: 'Line 2.2 Ga-Point',
                interactive: true,
                title: '<img src="styles/legend/Line22GaPoint_58.png" /> Line 2.2 Ga-Point'
            });
var format_Line21GaPolygon_59 = new ol.format.GeoJSON();
var features_Line21GaPolygon_59 = format_Line21GaPolygon_59.readFeatures(json_Line21GaPolygon_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line21GaPolygon_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line21GaPolygon_59.addFeatures(features_Line21GaPolygon_59);
var lyr_Line21GaPolygon_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line21GaPolygon_59, 
                style: style_Line21GaPolygon_59,
                popuplayertitle: 'Line 2.1 Ga-Polygon',
                interactive: true,
                title: 'Line 2.1 Ga-Polygon'
            });
var format_Line21GaPoint_60 = new ol.format.GeoJSON();
var features_Line21GaPoint_60 = format_Line21GaPoint_60.readFeatures(json_Line21GaPoint_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line21GaPoint_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line21GaPoint_60.addFeatures(features_Line21GaPoint_60);
var lyr_Line21GaPoint_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line21GaPoint_60, 
                style: style_Line21GaPoint_60,
                popuplayertitle: 'Line 2.1 Ga-Point',
                interactive: true,
                title: '<img src="styles/legend/Line21GaPoint_60.png" /> Line 2.1 Ga-Point'
            });
var format_QH519Depot_61 = new ol.format.GeoJSON();
var features_QH519Depot_61 = format_QH519Depot_61.readFeatures(json_QH519Depot_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH519Depot_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH519Depot_61.addFeatures(features_QH519Depot_61);
var lyr_QH519Depot_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH519Depot_61, 
                style: style_QH519Depot_61,
                popuplayertitle: 'QH519-Depot',
                interactive: true,
                title: '<img src="styles/legend/QH519Depot_61.png" /> QH519-Depot'
            });
var format_QH519Ga_62 = new ol.format.GeoJSON();
var features_QH519Ga_62 = format_QH519Ga_62.readFeatures(json_QH519Ga_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH519Ga_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH519Ga_62.addFeatures(features_QH519Ga_62);
var lyr_QH519Ga_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH519Ga_62, 
                style: style_QH519Ga_62,
                popuplayertitle: 'QH519-Ga',
                interactive: true,
    title: 'QH519-Ga<br />\
    <img src="styles/legend/QH519Ga_62_0.png" /> 1<br />\
    <img src="styles/legend/QH519Ga_62_1.png" /> 2<br />\
    <img src="styles/legend/QH519Ga_62_2.png" /> 2A<br />\
    <img src="styles/legend/QH519Ga_62_3.png" /> 3<br />\
    <img src="styles/legend/QH519Ga_62_4.png" /> 4<br />\
    <img src="styles/legend/QH519Ga_62_5.png" /> 5<br />\
    <img src="styles/legend/QH519Ga_62_6.png" /> 6<br />\
    <img src="styles/legend/QH519Ga_62_7.png" /> 7<br />\
    <img src="styles/legend/QH519Ga_62_8.png" /> 8<br />' });
var format_tuyen_M3_63 = new ol.format.GeoJSON();
var features_tuyen_M3_63 = format_tuyen_M3_63.readFeatures(json_tuyen_M3_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M3_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M3_63.addFeatures(features_tuyen_M3_63);
var lyr_tuyen_M3_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M3_63, 
                style: style_tuyen_M3_63,
                popuplayertitle: 'tuyen_M3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M3_63.png" /> tuyen_M3'
            });
var format_tuyen_M2_64 = new ol.format.GeoJSON();
var features_tuyen_M2_64 = format_tuyen_M2_64.readFeatures(json_tuyen_M2_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M2_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M2_64.addFeatures(features_tuyen_M2_64);
var lyr_tuyen_M2_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M2_64, 
                style: style_tuyen_M2_64,
                popuplayertitle: 'tuyen_M2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M2_64.png" /> tuyen_M2'
            });
var format_tuyen_M1_65 = new ol.format.GeoJSON();
var features_tuyen_M1_65 = format_tuyen_M1_65.readFeatures(json_tuyen_M1_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_M1_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_M1_65.addFeatures(features_tuyen_M1_65);
var lyr_tuyen_M1_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_M1_65, 
                style: style_tuyen_M1_65,
                popuplayertitle: 'tuyen_M1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_M1_65.png" /> tuyen_M1'
            });
var format_tuyen_VT_66 = new ol.format.GeoJSON();
var features_tuyen_VT_66 = format_tuyen_VT_66.readFeatures(json_tuyen_VT_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_VT_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_VT_66.addFeatures(features_tuyen_VT_66);
var lyr_tuyen_VT_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_VT_66, 
                style: style_tuyen_VT_66,
                popuplayertitle: 'tuyen_VT',
                interactive: true,
                title: '<img src="styles/legend/tuyen_VT_66.png" /> tuyen_VT'
            });
var format_tuyen_8_67 = new ol.format.GeoJSON();
var features_tuyen_8_67 = format_tuyen_8_67.readFeatures(json_tuyen_8_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_8_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_8_67.addFeatures(features_tuyen_8_67);
var lyr_tuyen_8_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_8_67, 
                style: style_tuyen_8_67,
                popuplayertitle: 'tuyen_8',
                interactive: true,
                title: '<img src="styles/legend/tuyen_8_67.png" /> tuyen_8'
            });
var format_tuyen_7_68 = new ol.format.GeoJSON();
var features_tuyen_7_68 = format_tuyen_7_68.readFeatures(json_tuyen_7_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_7_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_7_68.addFeatures(features_tuyen_7_68);
var lyr_tuyen_7_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_7_68, 
                style: style_tuyen_7_68,
                popuplayertitle: 'tuyen_7',
                interactive: true,
                title: '<img src="styles/legend/tuyen_7_68.png" /> tuyen_7'
            });
var format_tuyen_6_69 = new ol.format.GeoJSON();
var features_tuyen_6_69 = format_tuyen_6_69.readFeatures(json_tuyen_6_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_6_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_6_69.addFeatures(features_tuyen_6_69);
var lyr_tuyen_6_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_6_69, 
                style: style_tuyen_6_69,
                popuplayertitle: 'tuyen_6',
                interactive: true,
                title: '<img src="styles/legend/tuyen_6_69.png" /> tuyen_6'
            });
var format_tuyen_5_70 = new ol.format.GeoJSON();
var features_tuyen_5_70 = format_tuyen_5_70.readFeatures(json_tuyen_5_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_5_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_5_70.addFeatures(features_tuyen_5_70);
var lyr_tuyen_5_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_5_70, 
                style: style_tuyen_5_70,
                popuplayertitle: 'tuyen_5',
                interactive: true,
                title: '<img src="styles/legend/tuyen_5_70.png" /> tuyen_5'
            });
var format_tuyen_4_71 = new ol.format.GeoJSON();
var features_tuyen_4_71 = format_tuyen_4_71.readFeatures(json_tuyen_4_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_4_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_4_71.addFeatures(features_tuyen_4_71);
var lyr_tuyen_4_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_4_71, 
                style: style_tuyen_4_71,
                popuplayertitle: 'tuyen_4',
                interactive: true,
                title: '<img src="styles/legend/tuyen_4_71.png" /> tuyen_4'
            });
var format_tuyen_3_72 = new ol.format.GeoJSON();
var features_tuyen_3_72 = format_tuyen_3_72.readFeatures(json_tuyen_3_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_3_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_3_72.addFeatures(features_tuyen_3_72);
var lyr_tuyen_3_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_3_72, 
                style: style_tuyen_3_72,
                popuplayertitle: 'tuyen_3',
                interactive: true,
                title: '<img src="styles/legend/tuyen_3_72.png" /> tuyen_3'
            });
var format_tuyen_2A_73 = new ol.format.GeoJSON();
var features_tuyen_2A_73 = format_tuyen_2A_73.readFeatures(json_tuyen_2A_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2A_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2A_73.addFeatures(features_tuyen_2A_73);
var lyr_tuyen_2A_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2A_73, 
                style: style_tuyen_2A_73,
                popuplayertitle: 'tuyen_2A',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2A_73.png" /> tuyen_2A'
            });
var format_tuyen_2_74 = new ol.format.GeoJSON();
var features_tuyen_2_74 = format_tuyen_2_74.readFeatures(json_tuyen_2_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_2_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_2_74.addFeatures(features_tuyen_2_74);
var lyr_tuyen_2_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_2_74, 
                style: style_tuyen_2_74,
                popuplayertitle: 'tuyen_2',
                interactive: true,
                title: '<img src="styles/legend/tuyen_2_74.png" /> tuyen_2'
            });
var format_tuyen_1_75 = new ol.format.GeoJSON();
var features_tuyen_1_75 = format_tuyen_1_75.readFeatures(json_tuyen_1_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuyen_1_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuyen_1_75.addFeatures(features_tuyen_1_75);
var lyr_tuyen_1_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuyen_1_75, 
                style: style_tuyen_1_75,
                popuplayertitle: 'tuyen_1',
                interactive: true,
                title: '<img src="styles/legend/tuyen_1_75.png" /> tuyen_1'
            });
var group_QH519 = new ol.layer.Group({
                                layers: [lyr_QH519Depot_61,lyr_QH519Ga_62,lyr_tuyen_M3_63,lyr_tuyen_M2_64,lyr_tuyen_M1_65,lyr_tuyen_VT_66,lyr_tuyen_8_67,lyr_tuyen_7_68,lyr_tuyen_6_69,lyr_tuyen_5_70,lyr_tuyen_4_71,lyr_tuyen_3_72,lyr_tuyen_2A_73,lyr_tuyen_2_74,lyr_tuyen_1_75,],
                                fold: 'close',
                                title: 'QH 519'});
var group_CBT = new ol.layer.Group({
                                layers: [lyr_Line5PAtuyenkml_41,lyr_Line5PAtuyenkml_42,lyr_Line5PAtuyenkml_43,lyr_Line32DepotYenSo_44,lyr_Line32GaPolygon_45,lyr_Line32TuyenLinestring_46,lyr_Line32DepotYenSo_47,lyr_Line32GaPoint_48,lyr_T2AextGaPolygon_49,lyr_T2AextGaPoint_50,lyr_Line23DepotSocSon_51,lyr_Line23GaPolygon_52,lyr_Line23TuyenLinestring_53,lyr_Line23DepotSocSon_54,lyr_Line23GaPoint_55,lyr_Line22GaPolygon_56,lyr_Line22TuyenLinestring_57,lyr_Line22GaPoint_58,lyr_Line21GaPolygon_59,lyr_Line21GaPoint_60,],
                                fold: 'close',
                                title: 'CBĐT'});
var group_QH1668 = new ol.layer.Group({
                                layers: [lyr_T12layer_T12_21,lyr_T11layer_T11_22,lyr_T10layer_T10_23,lyr_T9layer_T9_24,lyr_T8layer_T8_25,lyr_T7layer_T7_26,lyr_T6layer_T6_27,lyr_T5layer_T5_28,lyr_T4layer_T4_29,lyr_T33layer_T3_30,lyr_T32layer_T3_31,lyr_T31layer_T3_32,lyr_T2Aextlayer_T2Aext_33,lyr_T2Alayer_T2A_34,lyr_T24layer_T2_35,lyr_T23layer_T2_36,lyr_T22layer_T2_37,lyr_T21layer_T2_38,lyr_T1Alayer_T1A_39,lyr_T1layer_T1_40,],
                                fold: 'close',
                                title: 'QH1668'});
var group_RasoatSXD = new ol.layer.Group({
                                layers: [lyr_Layer_CcTuynmi_7,lyr_Layer_Tuyn12_8,lyr_Layer_Tuyn11_9,lyr_Layer_Tuyn10_10,lyr_Layer_Tuyn9_11,lyr_Layer_Tuyn8_12,lyr_Layer_Tuyn7_13,lyr_Layer_Tuyn6_14,lyr_Layer_Tuyn5_15,lyr_Layer_Tuyn4_16,lyr_Layer_Tuyn3_17,lyr_Layer_Tuyn2A_18,lyr_Layer_Tuyn2_19,lyr_Layer_Tuyn1_20,],
                                fold: 'close',
                                title: 'Ra soat SXD'});
var group_QH100 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'QH 100'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleTraffic_1.setVisible(true);lyr_GoogleTerrain_2.setVisible(true);lyr_GoogleSatellite_3.setVisible(true);lyr_GoogleRoad_4.setVisible(true);lyr_GoogleLabels_5.setVisible(true);lyr_GoogleHybrid_6.setVisible(true);lyr_Layer_CcTuynmi_7.setVisible(true);lyr_Layer_Tuyn12_8.setVisible(true);lyr_Layer_Tuyn11_9.setVisible(true);lyr_Layer_Tuyn10_10.setVisible(true);lyr_Layer_Tuyn9_11.setVisible(true);lyr_Layer_Tuyn8_12.setVisible(true);lyr_Layer_Tuyn7_13.setVisible(true);lyr_Layer_Tuyn6_14.setVisible(true);lyr_Layer_Tuyn5_15.setVisible(true);lyr_Layer_Tuyn4_16.setVisible(true);lyr_Layer_Tuyn3_17.setVisible(true);lyr_Layer_Tuyn2A_18.setVisible(true);lyr_Layer_Tuyn2_19.setVisible(true);lyr_Layer_Tuyn1_20.setVisible(true);lyr_T12layer_T12_21.setVisible(true);lyr_T11layer_T11_22.setVisible(true);lyr_T10layer_T10_23.setVisible(true);lyr_T9layer_T9_24.setVisible(true);lyr_T8layer_T8_25.setVisible(true);lyr_T7layer_T7_26.setVisible(true);lyr_T6layer_T6_27.setVisible(true);lyr_T5layer_T5_28.setVisible(true);lyr_T4layer_T4_29.setVisible(true);lyr_T33layer_T3_30.setVisible(true);lyr_T32layer_T3_31.setVisible(true);lyr_T31layer_T3_32.setVisible(true);lyr_T2Aextlayer_T2Aext_33.setVisible(true);lyr_T2Alayer_T2A_34.setVisible(true);lyr_T24layer_T2_35.setVisible(true);lyr_T23layer_T2_36.setVisible(true);lyr_T22layer_T2_37.setVisible(true);lyr_T21layer_T2_38.setVisible(true);lyr_T1Alayer_T1A_39.setVisible(true);lyr_T1layer_T1_40.setVisible(true);lyr_Line5PAtuyenkml_41.setVisible(true);lyr_Line5PAtuyenkml_42.setVisible(true);lyr_Line5PAtuyenkml_43.setVisible(true);lyr_Line32DepotYenSo_44.setVisible(true);lyr_Line32GaPolygon_45.setVisible(true);lyr_Line32TuyenLinestring_46.setVisible(true);lyr_Line32DepotYenSo_47.setVisible(true);lyr_Line32GaPoint_48.setVisible(true);lyr_T2AextGaPolygon_49.setVisible(true);lyr_T2AextGaPoint_50.setVisible(true);lyr_Line23DepotSocSon_51.setVisible(true);lyr_Line23GaPolygon_52.setVisible(true);lyr_Line23TuyenLinestring_53.setVisible(true);lyr_Line23DepotSocSon_54.setVisible(true);lyr_Line23GaPoint_55.setVisible(true);lyr_Line22GaPolygon_56.setVisible(true);lyr_Line22TuyenLinestring_57.setVisible(true);lyr_Line22GaPoint_58.setVisible(true);lyr_Line21GaPolygon_59.setVisible(true);lyr_Line21GaPoint_60.setVisible(true);lyr_QH519Depot_61.setVisible(true);lyr_QH519Ga_62.setVisible(true);lyr_tuyen_M3_63.setVisible(true);lyr_tuyen_M2_64.setVisible(true);lyr_tuyen_M1_65.setVisible(true);lyr_tuyen_VT_66.setVisible(true);lyr_tuyen_8_67.setVisible(true);lyr_tuyen_7_68.setVisible(true);lyr_tuyen_6_69.setVisible(true);lyr_tuyen_5_70.setVisible(true);lyr_tuyen_4_71.setVisible(true);lyr_tuyen_3_72.setVisible(true);lyr_tuyen_2A_73.setVisible(true);lyr_tuyen_2_74.setVisible(true);lyr_tuyen_1_75.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleTraffic_1,lyr_GoogleTerrain_2,lyr_GoogleSatellite_3,lyr_GoogleRoad_4,lyr_GoogleLabels_5,lyr_GoogleHybrid_6,group_RasoatSXD,group_QH1668,group_CBT,group_QH519];
lyr_Layer_CcTuynmi_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn12_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn11_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn10_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn9_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn8_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn7_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn6_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn5_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn4_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn3_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn2A_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn2_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Layer_Tuyn1_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEntity': 'ExtendedEntity', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_T12layer_T12_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T11layer_T11_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T10layer_T10_23.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T9layer_T9_24.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T8layer_T8_25.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T7layer_T7_26.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T6layer_T6_27.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T5layer_T5_28.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T4layer_T4_29.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T33layer_T3_30.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T32layer_T3_31.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T31layer_T3_32.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T2Aextlayer_T2Aext_33.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T2Alayer_T2A_34.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T24layer_T2_35.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T23layer_T2_36.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T22layer_T2_37.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T21layer_T2_38.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T1Alayer_T1A_39.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_T1layer_T1_40.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'Thông tin': 'Thông tin', });
lyr_Line5PAtuyenkml_41.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'name_1': 'name_1', 'name_2': 'name_2', 'attrib_1': 'attrib_1', 'snippet': 'snippet', });
lyr_Line5PAtuyenkml_42.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'name_1': 'name_1', 'name_2': 'name_2', 'attrib_1': 'attrib_1', 'snippet': 'snippet', });
lyr_Line5PAtuyenkml_43.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'name_1': 'name_1', 'name_2': 'name_2', 'attrib_1': 'attrib_1', 'snippet': 'snippet', });
lyr_Line32DepotYenSo_44.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line32GaPolygon_45.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line32TuyenLinestring_46.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', });
lyr_Line32DepotYenSo_47.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line32GaPoint_48.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_T2AextGaPolygon_49.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_T2AextGaPoint_50.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', });
lyr_Line23DepotSocSon_51.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line23GaPolygon_52.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line23TuyenLinestring_53.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'attrib_1': 'attrib_1', 'attrib_2': 'attrib_2', });
lyr_Line23DepotSocSon_54.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line23GaPoint_55.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', });
lyr_Line22GaPolygon_56.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', });
lyr_Line22TuyenLinestring_57.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'attrib_1': 'attrib_1', 'attrib_2': 'attrib_2', });
lyr_Line22GaPoint_58.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'name_1': 'name_1', 'name_2': 'name_2', 'name_3': 'name_3', 'attrib_1': 'attrib_1', });
lyr_Line21GaPolygon_59.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Line21GaPoint_60.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'line': 'line', 'line_section': 'line_section', 'attrib_1': 'attrib_1', });
lyr_QH519Depot_61.set('fieldAliases', {'fid': 'fid', });
lyr_QH519Ga_62.set('fieldAliases', {'fid': 'fid', 'tenga': 'tenga', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', });
lyr_tuyen_M3_63.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M2_64.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_M1_65.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_VT_66.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_8_67.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_7_68.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_6_69.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_5_70.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_4_71.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_3_72.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2A_73.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_2_74.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_tuyen_1_75.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_Layer_CcTuynmi_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn12_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn11_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn10_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn9_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn8_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn7_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn6_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn5_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn4_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn3_17.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn2A_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn2_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Layer_Tuyn1_20.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEntity': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_T12layer_T12_21.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T11layer_T11_22.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T10layer_T10_23.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T9layer_T9_24.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T8layer_T8_25.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T7layer_T7_26.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T6layer_T6_27.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T5layer_T5_28.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T4layer_T4_29.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T33layer_T3_30.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T32layer_T3_31.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T31layer_T3_32.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T2Aextlayer_T2Aext_33.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T2Alayer_T2A_34.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T24layer_T2_35.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T23layer_T2_36.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T22layer_T2_37.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T21layer_T2_38.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T1Alayer_T1A_39.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_T1layer_T1_40.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'Thông tin': 'TextEdit', });
lyr_Line5PAtuyenkml_41.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'name_1': '', 'name_2': '', 'attrib_1': '', 'snippet': '', });
lyr_Line5PAtuyenkml_42.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'name_1': '', 'name_2': '', 'attrib_1': '', 'snippet': '', });
lyr_Line5PAtuyenkml_43.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', 'attrib_1': '', 'snippet': '', });
lyr_Line32DepotYenSo_44.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line32GaPolygon_45.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line32TuyenLinestring_46.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', });
lyr_Line32DepotYenSo_47.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line32GaPoint_48.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', });
lyr_T2AextGaPolygon_49.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_T2AextGaPoint_50.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', });
lyr_Line23DepotSocSon_51.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line23GaPolygon_52.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line23TuyenLinestring_53.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'attrib_1': '', 'attrib_2': '', });
lyr_Line23DepotSocSon_54.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line23GaPoint_55.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', });
lyr_Line22GaPolygon_56.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'name_2': '', });
lyr_Line22TuyenLinestring_57.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'line': '', 'line_section': '', 'name_1': '', 'attrib_1': '', 'attrib_2': '', });
lyr_Line22GaPoint_58.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'name_1': 'TextEdit', 'name_2': 'TextEdit', 'name_3': '', 'attrib_1': '', });
lyr_Line21GaPolygon_59.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Line21GaPoint_60.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'line': 'TextEdit', 'line_section': 'TextEdit', 'attrib_1': '', });
lyr_QH519Depot_61.set('fieldImages', {'fid': '', });
lyr_QH519Ga_62.set('fieldImages', {'fid': '', 'tenga': '', 'tuyen': '', 'doantuyen': '', 'quanhuyen': '', 'phuongxa': '', });
lyr_tuyen_M3_63.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M2_64.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_M1_65.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_VT_66.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_8_67.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_7_68.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_6_69.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_5_70.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_4_71.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_3_72.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'quanhuyen': 'TextEdit', 'phuongxa': 'TextEdit', 'tmdt': 'TextEdit', 'nguonvon': 'TextEdit', 'chudautu': 'TextEdit', 'thoigianth': 'TextEdit', 'chieudai': 'TextEdit', 'cao': 'TextEdit', 'matdat': 'TextEdit', 'ngam': 'TextEdit', 'soga': 'TextEdit', 'gacao': 'TextEdit', 'gamatdat': 'TextEdit', 'gangam': 'TextEdit', 'sodepot': 'TextEdit', 'sodoantau': 'TextEdit', 'capdien': 'TextEdit', 'tocdotk': 'TextEdit', 'tocdovanha': 'TextEdit', 'tggiancach': 'TextEdit', 'giomo': 'TextEdit', 'giodong': 'TextEdit', 'luotkhach': 'TextEdit', 'giaveluot': 'TextEdit', 'giavethang': 'TextEdit', 'thcbdt': 'TextEdit', 'ththdt': 'TextEdit', });
lyr_tuyen_2A_73.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_2_74.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_tuyen_1_75.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_Layer_CcTuynmi_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn12_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn11_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn10_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn9_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn8_12.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn7_13.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn6_14.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn5_15.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn4_16.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn3_17.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn2A_18.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn2_19.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Layer_Tuyn1_20.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEntity': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_T12layer_T12_21.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T11layer_T11_22.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T10layer_T10_23.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T9layer_T9_24.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T8layer_T8_25.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T7layer_T7_26.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T6layer_T6_27.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T5layer_T5_28.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T4layer_T4_29.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T33layer_T3_30.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T32layer_T3_31.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T31layer_T3_32.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T2Aextlayer_T2Aext_33.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T2Alayer_T2A_34.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T24layer_T2_35.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T23layer_T2_36.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T22layer_T2_37.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T21layer_T2_38.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T1Alayer_T1A_39.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_T1layer_T1_40.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'Thông tin': 'no label', });
lyr_Line5PAtuyenkml_41.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'name_1': 'no label', 'name_2': 'no label', 'attrib_1': 'no label', 'snippet': 'no label', });
lyr_Line5PAtuyenkml_42.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'name_1': 'no label', 'name_2': 'no label', 'attrib_1': 'no label', 'snippet': 'no label', });
lyr_Line5PAtuyenkml_43.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'name_1': 'no label', 'name_2': 'no label', 'attrib_1': 'no label', 'snippet': 'no label', });
lyr_Line32DepotYenSo_44.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'name_2': 'no label', });
lyr_Line32GaPolygon_45.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'name_2': 'no label', });
lyr_Line32TuyenLinestring_46.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', });
lyr_Line32DepotYenSo_47.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'name_2': 'no label', });
lyr_Line32GaPoint_48.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'name_2': 'no label', });
lyr_T2AextGaPolygon_49.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_T2AextGaPoint_50.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', });
lyr_Line23DepotSocSon_51.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'name_2': 'no label', });
lyr_Line23GaPolygon_52.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'name_2': 'no label', });
lyr_Line23TuyenLinestring_53.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'attrib_1': 'no label', 'attrib_2': 'no label', });
lyr_Line23DepotSocSon_54.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'name_2': 'no label', });
lyr_Line23GaPoint_55.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', });
lyr_Line22GaPolygon_56.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'name_2': 'no label', });
lyr_Line22TuyenLinestring_57.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'attrib_1': 'no label', 'attrib_2': 'no label', });
lyr_Line22GaPoint_58.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'name_1': 'no label', 'name_2': 'no label', 'name_3': 'no label', 'attrib_1': 'no label', });
lyr_Line21GaPolygon_59.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Line21GaPoint_60.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'line': 'no label', 'line_section': 'no label', 'attrib_1': 'no label', });
lyr_QH519Depot_61.set('fieldLabels', {'fid': 'no label', });
lyr_QH519Ga_62.set('fieldLabels', {'fid': 'no label', 'tenga': 'header label - visible with data', 'tuyen': 'inline label - visible with data', 'doantuyen': 'inline label - visible with data', 'quanhuyen': 'inline label - visible with data', 'phuongxa': 'inline label - visible with data', });
lyr_tuyen_M3_63.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_M2_64.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_M1_65.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_VT_66.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_8_67.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_7_68.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_6_69.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_5_70.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_4_71.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_3_72.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_2A_73.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_2_74.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_1_75.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'tuyen': 'no label', 'doantuyen': 'no label', 'huongtuyen': 'no label', 'quanhuyen': 'no label', 'phuongxa': 'no label', 'tmdt': 'no label', 'nguonvon': 'no label', 'chudautu': 'no label', 'thoigianth': 'no label', 'chieudai': 'no label', 'cao': 'no label', 'matdat': 'no label', 'ngam': 'no label', 'soga': 'no label', 'gacao': 'no label', 'gamatdat': 'no label', 'gangam': 'no label', 'sodepot': 'no label', 'sodoantau': 'no label', 'capdien': 'no label', 'tocdotk': 'no label', 'tocdovanha': 'no label', 'tggiancach': 'no label', 'giomo': 'no label', 'giodong': 'no label', 'luotkhach': 'no label', 'giaveluot': 'no label', 'giavethang': 'no label', 'thcbdt': 'no label', 'ththdt': 'no label', });
lyr_tuyen_1_75.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});