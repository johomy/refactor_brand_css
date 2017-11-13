/*---1111囤貨節頁面使用JS---*/
var model = "default";
$(function(){
  var activity_obj = {
                        "default" : {
                                      "header"    : {
                                                      "href_path" : "/",
                                                      "img_path"  : "images/NEWART_header.png"
                                                    },
                                      "slick"     : {
                                                      "slider_bn_1" : {
                                                                        "class_name" : "slider_bn",
                                                                        "href_path"  : "https://goo.gl/q54o7q",
                                                                        "img_path"   : "images/768x375-01.jpg"
                                                                      },
                                                      "slider_bn_2" : {
                                                                        "class_name" : "slider_bn",
                                                                        "href_path"  : "https://goo.gl/2nBNA1",
                                                                        "img_path"   : "images/768x375-02.jpg"
                                                                      },
                                                      "slider_bn_3" : {
                                                                        "class_name" : "slider_bn",
                                                                        "href_path"  : "https://goo.gl/N5gCCF",
                                                                        "img_path"   : "images/768x375-03.jpg"
                                                                      },
                                                      "slider_bn_4" : {
                                                                        "class_name" : "slider_bn",
                                                                        "href_path"  : "https://goo.gl/jXgcvk",
                                                                        "img_path"   : "images/768x375-04.jpg"
                                                                      },
                                                      "slider_bn_5" : {
                                                                        "class_name" : "slider_bn",
                                                                        "href_path"  : "https://goo.gl/NTQZwj",
                                                                        "img_path"   : "images/768x375-05.jpg"
                                                                      }
                                                    },
                                      "title"     : {
                                                      "id_name"   : [
                                                                      "anchor_1",
                                                                      "anchor_2",
                                                                      "anchor_3",
                                                                      "anchor_4"
                                                                    ],
                                                      "href_path" : [
                                                                      "https://goo.gl/UuaufG",
                                                                      "https://goo.gl/zo58Mi",
                                                                      "https://goo.gl/jXgcvk",
                                                                      "https://goo.gl/2jZ8D3"
                                                                    ],
                                                      "img_path"  : [
                                                                      "images/750x140-02.jpg",
                                                                      "images/750x140-04.jpg",
                                                                      "images/750x140-05.jpg",
                                                                      "images/750x140-01.jpg"
                                                                    ]
                                                    },
                                      "anchor_1"  : {
                                                      "gift_box_1" : {
                                                                       "href_path" : "https://goo.gl/FFqPNL",
                                                                       "img_path" : "images/1.jpg"
                                                                      },
                                                      "gift_box_2" : {
                                                                       "href_path" : "https://goo.gl/TKfP2Z",
                                                                       "img_path" : "images/2.jpg"
                                                                      },
                                                      "gift_box_3" : {
                                                                       "href_path" : "https://goo.gl/XPRDhJ",
                                                                       "img_path" : "images/3.jpg"
                                                                      },
                                                      "gift_box_4" : {
                                                                       "href_path" : "https://goo.gl/S1qaQQ",
                                                                       "img_path" : "images/4.jpg"
                                                                      },
                                                      "gift_box_5" : {
                                                                       "href_path" : "https://goo.gl/R8hLX9",
                                                                       "img_path" : "images/5.png"
                                                                      },
                                                      "gift_box_6" : {
                                                                       "href_path" : "https://goo.gl/5tnQUa",
                                                                       "img_path" : "images/6.png"
                                                                      },
                                                      "gift_box_7" : {
                                                                       "href_path" : "https://goo.gl/mVgkrq",
                                                                       "img_path" : "images/7.jpg"
                                                                      },
                                                      "gift_box_8" : {
                                                                       "href_path" : "https://goo.gl/UrFDBN",
                                                                       "img_path" : "images/8.jpg"
                                                                      },
                                                      "gift_box_9" : {
                                                                       "href_path" : "https://goo.gl/yuLtPr",
                                                                       "img_path" : "images/9.jpg"
                                                                      },
                                                      "gift_box_10" : {
                                                                       "href_path" : "https://goo.gl/AZf4N6",
                                                                       "img_path" : "images/10.jpg"
                                                                      },
                                                      "gift_box_11" : {
                                                                       "href_path" : "https://goo.gl/sFh1sv",
                                                                       "img_path" : "images/11.jpg"
                                                                      },
                                                      "gift_box_12" : {
                                                                       "href_path" : "https://goo.gl/uYdYyu",
                                                                       "img_path" : "images/all_12.jpg"
                                                                      }
                                                    },
                                      "anchor_2"  : {
                                                      "table"   : {
                                                                    "table01" : {
                                                                                  "table_id"   : "table_1",
                                                                                  "img_path"   : [
                                                                                                   "images/120x120_table01_0.jpg",
                                                                                                   "images/120x120_table01_1.png",
                                                                                                   "images/not_yet_started_0.png",
                                                                                                   "images/not_yet_started_1.png"
                                                                                                 ],
                                                                                  "prod_items" : {
                                                                                                  "2017-11-01" : {
                                                                                                                    "days" : "1",
                                                                                                                    "table_id"   : "table_1",
                                                                                                                    "class_name" : "days_",
                                                                                                                    "href_path"  : "https://goo.gl/Svn2Z2",
                                                                                                                    "img_path"   : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_1.jpg"
                                                                                                                                   ],
                                                                                                                    "special"    : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                 },
                                                                                                  "2017-11-02" : {
                                                                                                                    "days" : "2",
                                                                                                                    "table_id"   : "table_1",
                                                                                                                    "class_name" : "days_",
                                                                                                                    "href_path"  : "https://goo.gl/naLGpQ",
                                                                                                                    "img_path"   : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_2.jpg"
                                                                                                                                   ],
                                                                                                                    "special"    : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                 },
                                                                                                  "2017-11-03" : {
                                                                                                                    "days" : "3",
                                                                                                                    "table_id"   : "table_1",
                                                                                                                    "class_name" : "days_",
                                                                                                                    "href_path"  : "https://goo.gl/k8XVPN",
                                                                                                                    "img_path"   : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_3.jpg"
                                                                                                                                   ],
                                                                                                                    "special"    : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                 },
                                                                                                  "2017-11-04" : {
                                                                                                                    "days" : "4",
                                                                                                                    "table_id"   : "table_1",
                                                                                                                    "class_name" : "days_",
                                                                                                                    "href_path"  : "https://goo.gl/9bTddR",
                                                                                                                    "img_path"    : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_4.jpg"
                                                                                                                                   ],
                                                                                                                    "special"    : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                 },
                                                                                                  "2017-11-05" : {
                                                                                                                    "days" : "5",
                                                                                                                    "table_id"   : "table_1",
                                                                                                                    "class_name" : "days_",
                                                                                                                    "href_path"  : "https://goo.gl/478CKo",
                                                                                                                    "img_path"   : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_5.jpg"
                                                                                                                                   ],
                                                                                                                    "special"    : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                 },
                                                                                                  "2017-11-06" : {
                                                                                                                    "days" : "6",
                                                                                                                    "table_id"   : "table_1",
                                                                                                                    "class_name" : "days_",
                                                                                                                    "href_path"  : "https://goo.gl/8i2RGu",
                                                                                                                    "img_path"   : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_6.jpg"
                                                                                                                                   ],
                                                                                                                    "special"    : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                 },
                                                                                                  "2017-11-07" : {
                                                                                                                    "days" : "7",
                                                                                                                    "table_id"   : "table_1",
                                                                                                                    "class_name" : "days_",
                                                                                                                    "href_path"  : "https://goo.gl/QrdiXL",
                                                                                                                    "img_path"   : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_7.jpg"
                                                                                                                                   ],
                                                                                                                     "special"   : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                 }
                                                                                                 }
                                                                                },
                                                                    "table02" : {
                                                                                  "table_id"   : "table_2",
                                                                                  "img_path"   : [
                                                                                                   "images/120x120_table02_0.jpg",
                                                                                                   "images/120x120_table02_1.png",
                                                                                                   "images/not_yet_started_0.png",
                                                                                                   "images/not_yet_started_1.png"
                                                                                                 ],
                                                                                  "prod_items" : {
                                                                                                    "2017-11-08" : {
                                                                                                                      "days" : "8",
                                                                                                                      "table_id"   : "table_2",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path"  : "https://goo.gl/MV3oRy",
                                                                                                                      "img_path"   : [
                                                                                                                                      "images/not_yet_started_0.png",
                                                                                                                                      "images/not_yet_started_1.png",
                                                                                                                                      "images/750x300_8.jpg"
                                                                                                                                     ],
                                                                                                                      "special"    : [
                                                                                                                                      ""
                                                                                                                                     ]
                                                                                                                   },
                                                                                                    "2017-11-09" : {
                                                                                                                      "days" : "9",
                                                                                                                      "table_id"   : "table_2",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path"  : "https://goo.gl/axovUt",
                                                                                                                      "img_path"   : [
                                                                                                                                      "images/not_yet_started_0.png",
                                                                                                                                      "images/not_yet_started_1.png",
                                                                                                                                      "images/750x300_9.jpg"
                                                                                                                                     ],
                                                                                                                      "special"    : [
                                                                                                                                      ""
                                                                                                                                     ]
                                                                                                                   },
                                                                                                    "2017-11-10" : {
                                                                                                                      "days" : "10",
                                                                                                                      "table_id"   : "table_2",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path"  : "https://goo.gl/tSQ9jb",
                                                                                                                      "img_path"   : [
                                                                                                                                      "images/not_yet_started_0.png",
                                                                                                                                      "images/not_yet_started_1.png",
                                                                                                                                      "images/750x300_10.jpg"
                                                                                                                                     ],
                                                                                                                      "special"    : [
                                                                                                                                      ""
                                                                                                                                     ]
                                                                                                                   },
                                                                                                    "2017-11-11" : {
                                                                                                                      "days" : "11",
                                                                                                                      "table_id" : "table_2",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/t71zdE",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_11.jpg"
                                                                                                                                   ],
                                                                                                                      "special"    : [
                                                                                                                                      ""
                                                                                                                                     ]
                                                                                                                   },
                                                                                                    "2017-11-12" : {
                                                                                                                      "days" : "12",
                                                                                                                      "table_id" : "table_2",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/7Raaya",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_12.jpg"
                                                                                                                                   ],
                                                                                                                      "special"    : [
                                                                                                                                      ""
                                                                                                                                     ]
                                                                                                                   },
                                                                                                    "2017-11-13" : {
                                                                                                                      "days" : "13",
                                                                                                                      "table_id" : "table_2",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/5DLg6N",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_13.jpg"
                                                                                                                                   ],
                                                                                                                      "special"    : [
                                                                                                                                      ""
                                                                                                                                     ]
                                                                                                                   },
                                                                                                    "2017-11-14" : {
                                                                                                                      "days" : "14",
                                                                                                                      "table_id" : "table_2",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/3xXdBU",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_14.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   }
                                                                                                 }
                                                                                },
                                                                    "table03" : {
                                                                                  "table_id"   : "table_3",
                                                                                  "img_path"   : [
                                                                                                   "images/120x120_table03_0.jpg",
                                                                                                   "images/120x120_table03_1.png",
                                                                                                   "images/not_yet_started_0.png",
                                                                                                   "images/not_yet_started_1.png"
                                                                                                 ],
                                                                                  "prod_items" : {
                                                                                                    "2017-11-15" : {
                                                                                                                      "days" : "15",
                                                                                                                      "table_id" : "table_3",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/WFqV5b",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_15.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-16" : {
                                                                                                                      "days" : "16",
                                                                                                                      "table_id" : "table_3",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/71nvYR",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_16.jpg"
                                                                                                                                   ],
                                                                                                                       "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-17" : {
                                                                                                                      "days" : "17",
                                                                                                                      "table_id" : "table_3",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/ap4bbs",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_17.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-18" : {
                                                                                                                      "days" : "18",
                                                                                                                      "table_id" : "table_3",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/C1Yr2F",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_18.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-19" : {
                                                                                                                      "days" : "19",
                                                                                                                      "table_id" : "table_3",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/hEUHN2",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_19.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-20" : {
                                                                                                                      "days" : "20",
                                                                                                                      "table_id" : "table_3",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/3Fn6Yk",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_20.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-21" : {
                                                                                                                      "days" : "21",
                                                                                                                      "table_id" : "table_3",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/q1tNNL",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_21.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   }
                                                                                                 }
                                                                                },
                                                                    "table04" : {
                                                                                  "table_id"   : "table_4",
                                                                                  "img_path"   : [
                                                                                                   "images/120x120_table04_0.jpg",
                                                                                                   "images/120x120_table04_1.png",
                                                                                                   "images/not_yet_started_0.png",
                                                                                                   "images/not_yet_started_1.png"
                                                                                                 ],
                                                                                  "prod_items" : {
                                                                                                    "2017-11-22" : {
                                                                                                                      "days" : "22",
                                                                                                                      "table_id" : "table_4",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/SJpVau",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_22.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-23" : {
                                                                                                                      "days" : "23",
                                                                                                                      "table_id" : "table_4",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/xE5beU",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_23.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-24" : {
                                                                                                                      "days" : "24",
                                                                                                                      "table_id" : "table_4",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/noupfG",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_24.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-25" : {
                                                                                                                      "days" : "25",
                                                                                                                      "table_id" : "table_4",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/MQHKCe",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_25.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-26" : {
                                                                                                                      "days" : "26",
                                                                                                                      "table_id" : "table_4",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/2t734E",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_26.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-27" : {
                                                                                                                      "days" : "27",
                                                                                                                      "table_id" : "table_4",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/bL2TT9",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_27.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-28" : {
                                                                                                                      "days" : "28",
                                                                                                                      "table_id" : "table_4",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/ABvrp7",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_28.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-29" : {
                                                                                                                      "days" : "29",
                                                                                                                      "table_id" : "table_4",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/LYCPWm",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_29.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    ""
                                                                                                                                   ]
                                                                                                                   },
                                                                                                    "2017-11-30" : {
                                                                                                                      "days" : "30",
                                                                                                                      "table_id" : "table_4",
                                                                                                                      "class_name" : "days_",
                                                                                                                      "href_path" : "https://goo.gl/Ea8Hvv",
                                                                                                                      "img_path" : [
                                                                                                                                    "images/not_yet_started_0.png",
                                                                                                                                    "images/not_yet_started_1.png",
                                                                                                                                    "images/750x300_30.jpg"
                                                                                                                                   ],
                                                                                                                      "special"  : [
                                                                                                                                    "1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"
                                                                                                                                   ]
                                                                                                                   }
                                                                                                 }
                                                                                }
                                                                  }
                                                    },
                                      "anchor_3"  : {},
                                      "anchor_4"  : {
                                                      "member"      : {
                                                                        "href_path" : "https://goo.gl/p2NzUA",
                                                                        "img_path"  : "images/768x375_member.jpg"
                                                                      },
                                                      "description" : {
                                                                        "img_path" : "images/Description.jpg"
                                                                      },
                                                      "FB_button"   : {
                                                                        "href_path" : "https://goo.gl/eAyaoK",
                                                                        "img_path"  : "images/FB_img.png"
                                                                      },
                                                      "LINE_button" : {
                                                                        "href_path" : "https://line.me/R/ti/p/%40ngq1692g",
                                                                        "img_path"  : "images/line_logo.png"
                                                                      }
                                                    },
                                      "footer"    : {
                                                      "anchor_1" : {
                                                                      "class_name" : "ori_img",
                                                                      "file_name" : "120x120_1_",
                                                                      "href_path" : "#anchor_1",
                                                                      "img_path" : ["images/120x120_1_0.jpg",
                                                                                    "images/120x120_1_1.png"]
                                                                    },
                                                      "anchor_2" : {
                                                                      "class_name" : "ori_img",
                                                                      "file_name" : "120x120_2_",
                                                                      "href_path" : "#anchor_2",
                                                                      "img_path" : ["images/120x120_2_0.jpg",
                                                                                    "images/120x120_2_1.png"]
                                                                    },
                                                      "anchor_3" : {
                                                                      "class_name" : "ori_img",
                                                                      "file_name" : "120x120_3_",
                                                                      "href_path" : "#anchor_3",
                                                                      "img_path" : ["images/120x120_3_0.jpg",
                                                                                    "images/120x120_3_1.png"]
                                                                    },
                                                      "anchor_4" : {
                                                                      "class_name" : "ori_img",
                                                                      "file_name" : "120x120_4_",
                                                                      "href_path" : "#anchor_4",
                                                                      "img_path" : ["images/120x120_4_0.jpg",
                                                                                    "images/120x120_4_1.png"]
                                                                    },
                                                      "anchor_5" : {
                                                                      "class_name" : "ori_img",
                                                                      "file_name" : "120x120_5_",
                                                                      "href_path" : "https://goo.gl/Hg5pRX",
                                                                      "img_path" : ["images/120x120_5_0.jpg",
                                                                                    "images/120x120_5_1.png"]
                                                                    }
                                                    }
                                   }
                      }
  // var html = "";
  var header_html = "";
  var slick_html = "";
  var article_1_html = "";
  var article_2_html = "";
  var article_4_html = "";
  var footer_html = "";
  $.each(activity_obj,function(key,value){
    // Header
    header_html += '<header class="header_wrap ta-c">';
    header_html += '<div class="header_mid">';
    header_html += '<a href="'+value["header"]["href_path"]+'">';
    header_html += '<img src="'+value["header"]["img_path"]+'" class="header_logo_img">';
    header_html += '</a>';
    header_html += '</div>';
    header_html += '</header>';
    header_html += '<div class="blank60"></div>';
    // Slick
    slick_html += '<article class="big_bn_wrap">';
    slick_html += '<div class="block_model">';
    slick_html += '<section class="regular slider inner_box">';
    $.each(value["slick"],function(key,value){
      slick_html += '<div class="'+value.class_name+'">';
      slick_html += '<a href="'+value.href_path+'">';
      slick_html += '<img src="'+value.img_path+'">';
      slick_html += '</a>';
      slick_html += '</div>';
    });
    slick_html += '</section>';
    slick_html += '</div>'
    slick_html += '</article>';
    // 全面7折
    article_1_html += '<article class="article_1">';
    article_1_html += '<a href="'+value["title"]["href_path"][0]+'" id="'+value["title"]["id_name"][0]+'">';
    article_1_html += '<img src="'+value["title"]["img_path"][0]+'">';
    article_1_html += '</a>';
    article_1_html += '<ul>';
    $.each(value["anchor_1"],function(key,value){
      article_1_html += '<li class="col-xs-6 p-r-0 p-l-0 p-t-0 p-b-0">';
      article_1_html += '<a href="'+value["href_path"]+'">';
      article_1_html += '<img src="'+value["img_path"]+'">';
      article_1_html += '</a>';
      article_1_html += '</li>';
    });
    article_1_html += '<li class="clear"></li>';
    article_1_html += '</ul>';
    article_1_html += '</article>';
    // 天天驚喜
    article_2_html += '<article class="surprise_every_day_wrap">';
    article_2_html += '<a href="'+value["title"]["href_path"][1]+'" id="'+value["title"]["id_name"][1]+'">';
    article_2_html += '<img src="'+value["title"]["img_path"][1]+'">';
    article_2_html += '</a>';
    article_2_html += '<nav class="controls">';
    article_2_html += '<ul id="bar">';
    $.each(value["anchor_2"]["table"],function(key,value){
      article_2_html += '<li class="col-xs-3 p-r-0 p-l-0 ta-c '+value.table_id+'">';
      article_2_html += '<a href="#'+value.table_id+'">';
      article_2_html += '<img src="'+value.img_path[0]+'" file_name="120x120_'+key+'_" class="table_img">';
      article_2_html += '</a>';
      article_2_html += '</li>';
    });
    article_2_html += '<li class="clear"></li>';
    article_2_html += '</ul>';
    article_2_html += '</nav>';
    article_2_html += '<article class="tab_contents">';
    $.each(value.anchor_2.table,function(key,value){
      article_2_html += '<ul id="'+value.table_id+'" class="table_position">';
      $.each(value.prod_items,function(key,value){
        article_2_html += '<li>';
        article_2_html += '<div class="not_yet_started '+value.class_name+value.days+'">';
        article_2_html += '<img src="' + value.img_path[0] + '">';
        article_2_html += '</div>';
        article_2_html += '<a href="' + value.href_path + '">';
        article_2_html += '<img src="' + value.img_path[2] + '">';
        article_2_html += '</a>';
        article_2_html += '</li>';
      });
      article_2_html += '</ul>';
    });
    article_2_html += '</article>';
    article_2_html += '</article>';
    // 怎麼買最划算
    // html += '<a href="'+value["title"]["href_path"][2]+'" id="'+value["title"]["id_name"][2]+'">';
    // html += '<img src="'+value["title"]["img_path"][2]+'">';
    // html += '</a>';
    // html += '<ul class="m-t-20">';
    // html += '<li class="ta-c">';
    // html += '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fnewartshop%2Fvideos%2F1429097517143717%2F&show_text=1&width=350" width="350" height="385" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>';
    // html += '</li>';
    // html += '</ul>';
    // 加入會員再賺紅利
    article_4_html += '<a href="'+value["title"]["href_path"][3]+'" id="'+value["title"]["id_name"][3]+'">';
    article_4_html += '<img src="'+value["title"]["img_path"][3]+'">';
    article_4_html += '</a>';
    article_4_html += '<ul class="m-b-20">';
    article_4_html += '<li>';
    article_4_html += '<a href="'+value["anchor_4"]["member"]["href_path"]+'">';
    article_4_html += '<img src="'+value["anchor_4"]["member"]["img_path"]+'">';
    article_4_html += '</a>';
    article_4_html += '</li>';
    article_4_html += '<li class="m-t-10 m-b-10 ta-c">';
    article_4_html += '<iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.newart.com.tw%2Factivity_11&layout=button&size=large&mobile_iframe=true&width=65&height=28&appId" width="65" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>';
    article_4_html += '</li>';
    article_4_html += '<li><img src="'+value["anchor_4"]["description"]["img_path"]+'"></li>';
    article_4_html += '<li class="col-xs-12 col-sm-6 m-t-5 m-b-5 p-r-5 p-l-5">';
    article_4_html += '<div class="FB_button inner_box btn box_shadow_white">';
    article_4_html += '<img src="'+value["anchor_4"]["FB_button"]["img_path"]+'">';
    article_4_html += '<a href="'+value["anchor_4"]["FB_button"]["href_path"]+'">加入Newart聽見你頭髮的聲音</a>';
    article_4_html += '</div>';
    article_4_html += '</li>';
    article_4_html += '<li class="col-xs-12 col-sm-6 m-t-5 m-b-5 p-r-5 p-l-5">';
    article_4_html += '<div class="line_button inner_box btn box_shadow_white">';
    article_4_html += '<img src="'+value["anchor_4"]["LINE_button"]["img_path"]+'">';
    article_4_html += '<a href="'+value["anchor_4"]["LINE_button"]["href_path"]+'">加入LINE@得知最新消息</a>';
    article_4_html += '</div>';
    article_4_html += '</li>';
    article_4_html += '<li class="clear"></li>';
    article_4_html += '</ul>';
    // Footer
    footer_html += '<div class="blank60"></div>';
    footer_html += '<footer class="footer_menu_wrap Border">';
    footer_html += '<ul>';
    $.each(value["footer"],function(key,value){
      footer_html += '<li class="activity_menu_icon">';
      footer_html += '<div class="ta-c">';
      footer_html += '<a href="' +value.href_path+ '">';
      footer_html += '<img src="' +value.img_path[0]+ '" file_name="' +value.file_name+ '" class="ori_img">';
      footer_html += '</a>';
      footer_html += '/div>';
      footer_html += '</li>';
    });
    footer_html += '</ul>';
    footer_html += '</footer>';
  });
  // $(".content_right").html(html);
  $(".header_content").html(header_html);
  $(".slick_content").html(slick_html);
  $(".article_1_content").html(article_1_html);
  $(".article_2_content").html(article_2_html);
  $(".article_4_content").html(article_4_html);
  $(".footer_content").html(footer_html);
  // 天天驚喜
  var now = new Date();
  var local = new Date(now);
  local.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  var date = local.toJSON().slice(0,10);
  var days = parseInt(date.slice(8,10));

  $("#bar a").click(function(){
    // reset
    $(".tab_contents ul").hide();
    $(".controls a").each(function(){
      $(this).css("background","#ffffff");
    });
    $(".table_img").each(function(){ 
      var file = $(this).attr("file_name");
      $(this).attr("src",'images/'+file+"0.jpg");
    });
    // active
    $($(this).attr("href")).show();
    $(this).css("background","#c30d22");
    var file_name = $("img",this).attr("file_name");
    $("img",this).attr("src","images/"+file_name+"1.png");
    $('html,body').animate({scrollTop:$($(this).attr("href")).offset().top+-122+"px"},800);
    return false;
  });

  $(".tab_contents ul").hide();
  // $("#table_1").show();
  // $(".table_1 a").css("background","#c30d22");
  // $(".table_1 a img").attr("src","images/120x120_table01_1.png");

  $.each(activity_obj[model]["anchor_2"]["table"],function(key,value){
    if (!$.isEmptyObject(value.prod_items[date])) {
      var special_value = parseInt(value.prod_items[date]["special"]);
      if (special_value > 0) {
        for (var i = 0; i < value.prod_items[date]["special"].length; i++) {
          var table = 0;
          var special = parseInt(value.prod_items[date]["special"][i]);
          var quotient = Math.floor(parseInt(value.prod_items[date]["special"][i])/7);
          var remainder = parseInt(value.prod_items[date]["special"][i])%7;
          table = quotient + 1;
          if (table > 4) {
            table = quotient;
          }
          if (remainder == 0) {
              table = quotient;
          }
          if (special <= 9) {
            special = "0" + special;
          }
          var tab_id = "table0" + table;
          var special_date = date.slice(0,8) + special;
          console.log(tab_id);
          var obj_class_name = activity_obj[model]["anchor_2"]["table"][tab_id]["prod_items"][special_date]["class_name"];
          var obj_days = activity_obj[model]["anchor_2"]["table"][tab_id]["prod_items"][special_date]["days"];
          $("."+(obj_class_name + obj_days)).hide();
        }
      }
      else{
        $("."+(value.prod_items[date]["class_name"] + value.prod_items[date]["days"])).hide();
      }
      if (days > 1) {
        for (var i = 1; i < days; i++) {
          $(".days_"+i).children("img").attr("src",value.img_path[3]);
        }
      }

      $.each(value["prod_items"],function(key){
        if (date = key) {
          // $("#table_1").hide();
          // $(".table_1 a").css("background","#fff");
          // $(".table_1 a img").attr("src","images/120x120_table01_0.jpg");

          $(".tab_contents").children("#" + value.prod_items[date]["table_id"]).show();
          $("." + value.prod_items[date]["table_id"]).children("a").css("background","#c30d22");
          $("." + value.prod_items[date]["table_id"]).children("a").children("img").attr("src",value.img_path[1]);
        }
      });
    }
  });
 // Footer
  $(".activity_menu_icon").click(function(){
    // reset
    $(".activity_menu_icon div").removeClass("active");
    $(".ori_img").each(function(){ 
      var file = $(this).attr("file_name");
      $(this).attr("src",'images/'+file+"0.jpg");
    });
    //active
    $(this).children(".activity_menu_icon div").addClass("active");
    var file_name = $("img",this).attr("file_name");
    $("img",this).attr("src","images/"+file_name+"1.png");
    $('html,body').animate({scrollTop:$($("a",this).attr("href")).offset().top+-62+"px"},800);
    return false;
  });
});