(function() {
  var imglist = {
    proload_0_png: "./images/icon/0_p.png",
    proload_1_png: "./images/icon/1_p.png",
    proload_2_png: "./images/icon/2_p.png",
    proload_3_png: "./images/icon/3_p.png",
    proload_4_png: "./images/icon/4_p.png",
    proload_5_png: "./images/icon/5_p.png",
    proload_6_png: "./images/icon/6_p.png",
    proload_7_png: "./images/icon/7_p.png",
    proload_8_png: "./images/icon/8_p.png",
    proload_cloud1_png: "./images/icon/cloud1_p.png",
    proload_cloud2_png: "./images/icon/cloud2_p.png",
    proload_cloud3_png: "./images/icon/cloud3_p.png",
    proload_logo1_png: "./images/icon/01.png",
    proload_logo2_png: "./images/icon/02.png",
    proload_logo3_png: "./images/icon/03.png",
    proload_logo4_png: "./images/icon/logo4_p1.png"
  };
  //创建场景
  var ql = new C3D.Stage({
    el: $("#three")[0]
  });
  ql.size(window.innerWidth, window.innerHeight).update();
  //容器
  var spMain = new C3D.Sprite();
  spMain.position(0, 0, -600).update();
  ql.addChild(spMain);

  //loading列表
  var basePath = "images/";
  var loader = new window.PxLoader();
  //声明资源文件列表
  var fileList = [
    "bg/1.png",
    "bg/2.png",
    "bg/3.png",
    "bg/4.png",
    "bg/5.png",
    "bg/6.png",
    "bg/7.png",
    "bg/8.png",
    "bg/9.png",
    "bg/10.png",
    "bg/11.png",
    "bg/12.png",
    "bg/13.png",
    "bg/14.png",
    "bg/15.png",
    "bg/16.png",
    "bg/17.png",
    "bg/18.png",
    "bg/19.png",
    "bg/20.png",
    "pano/p1/p1-1.png",
    "pano/p1/p1-2.png",
    "pano/p2/p2-1.png",
    "pano/p2/p2-2.png",
    "pano/p2/p2-3.png",
    "pano/p3/p3-1.png",
    "pano/p3/p3-2.png",
    "pano/p3/p3-3.png",
    "pano/p3/p3-4.png",
    "pano/p4/p4-1.png",
    "pano/p4/p4-2.png",
    "pano/p4/p4-3.png",
    "pano/p5/p5-1.png",
    "pano/p5/p5-2.png",
    "pano/p6/p6-1.png",
    "pano/p6/p6-2.png",
    "pano/p6/p6-3.png",
    "pano/p7/p7-1.png",
    "pano/p7/p7-2.png",
    "pano/p7/p7-3.png",
    "pano/p7/p7-4.png",
    "pano/p7/p7-5.png",
    "pano/p8/p8-1.png",
    "pano/p8/p8-2.png",
    "pano/p9/p9-1.png",
    "pano/p9/p9-2.png",
    "pano/p10/p10-1.png",
    "pano/p11/p11-1.png",
    "pano/p11/p11-2.png",
    "pano/p12/p12-1.png",
    "pano/p12/p12-2.png",
    "pano/p12/p12-3.png",
    "btn/btn_aminate_icon.png",
    "btn/btn_fyl1.png",
    "btn/btn_fyl2.png",
    "layer/btn_close.png",
    "layer/baihua.png",
    "layer/huangbaoche.png",
    "layer/hutong1_text.png",
    "layer/hutongzhizui.png",
    "layer/mofanshuju.png",
    "layer/qingyunge.png",
    "layer/ruifuxiang.png",
    "layer/tieshizi.png",
    "layer/xiaochi.png",
    "layer/ymzxiejie.png",
    "layer/yuebin.png",
    "layer/ztht.png",
    "icon/logo4_p1.png",
    "icon/02.png",
    "icon/03.png",
    "music.png",
    "music_pause.png",
    "bg-main.png"
  ];

  for (var i = 0; i < fileList.length; i++) {
    loader.addImage(basePath + fileList[i]);
  }
  loader.addProgressListener(function(e) {
    var percent = Math.round(e.completedCount / e.totalCount * 100);
    $("#loading_text").html("已加载 " + percent + " %");
  });
  loader.addCompletionListener(function() {
    $("#loading_bg").remove();
    tl2.play();
    $(".music").show();
    ready();
  });

  JT.fromTo(
    $(".loading-anm"),
    1.5,
    {
      rotationY: 0
    },
    {
      rotationY: 360,
      yoyo: false,
      repeat: -1
    }
  );
  var getRandom = function(t, i) {
    return t + Math.floor(Math.random() * (i - t) * 100) / 100
  };

  var scene1 = new C3D.Sprite();
  scene1.position(0, 0, 0).update();
  for (var i = 0; i < 8; i++) {
    var _p = new C3D.Plane();
    _p
      .size(90, 102)
      .rotation(
        getRandom(-180, 180),
        getRandom(-180, 180),
        getRandom(-180, 180)
      )
      .scale(0.01)
      .material({
        image: imglist.proload_8_png
      })
      .update();
    scene1.addChild(_p);
  }

  var scene3 = new C3D.Sprite();
  scene3
    .position(0, 0, 0)
    .scale(0.01)
    .update();
  var other = [
    //红色的箭头
    {
      w: 65,
      h: 55,
      url: imglist.proload_0_png
    },
    {
      w: 93,
      h: 71,
      url: imglist.proload_1_png
    },
    {
      w: 20,
      h: 58,
      url: imglist.proload_2_png
    },
    {
      w: 29,
      h: 43,
      url: imglist.proload_3_png
    },
    {
      w: 31,
      h: 22,
      url: imglist.proload_4_png
    },
    {
      w: 29,
      h: 20,
      url: imglist.proload_5_png
    },
    {
      w: 34,
      h: 92,
      url: imglist.proload_6_png
    },
    {
      w: 203,
      h: 90,
      url: imglist.proload_7_png
    }
  ];

  for (var i = 0; i < 15; i++) {
    var _id = i < 5 ? i % 3 : (i - 3) % 3 + 3;
    var _p = new C3D.Plane();
    _p
      .size(other[_id].w, other[_id].h)
      .scale(0.5)
      .material({
        image: other[_id].url
      })
      .update();
    scene3.addChild(_p);
  }
  // 云彩
  var cloud = [
    {
      w: 200,
      h: 100,
      url: imglist.proload_cloud1_png
    },
    {
      w: 200,
      h: 100,
      url: imglist.proload_cloud2_png
    },
    {
      w: 200,
      h: 100,
      url: imglist.proload_cloud3_png
    }
  ];
  var scene4 = new C3D.Sprite();
  scene4
    .position(0, 0, 0)
    .scale(0.01)
    .update();
  for (var i = 0; i < 9; i++) {
    var _id = i % 3;
    var _p = new C3D.Plane();
    _p
      .size(cloud[_id].w, cloud[_id].h)
      .scale(0.5)
      .material({
        image: cloud[_id].url
      })
      .update();
    scene4.addChild(_p);
  }

  var logo1 = C3D.create({
    type: "sprite",
    scale: [0.1],
    children: [
      {
        type: "plane",
        size: [150, 138],
        material: [
          {
            image: imglist.proload_logo1_png
          }
        ]
      }
    ]
  });
  var logo2 = C3D.create({
    type: "sprite",
    scale: [0.1],
    children: [
      {
        type: "plane",
        size: [150, 138],
        material: [
          {
            image: imglist.proload_logo2_png
          }
        ]
      }
    ]
  });
  var logo3 = C3D.create({
    type: "sprite",
    scale: [0.1],
    children: [
      {
        type: "plane",
        size: [150, 138],
        material: [
          {
            image: imglist.proload_logo3_png
          }
        ]
      }
    ]
  });
  var logo4 = C3D.create({
    type: "sprite",
    scale: [0.05],
    children: [
      {
        type: "plane",
        size: [512, 909],
        material: [
          {
            image: imglist.proload_logo4_png
          }
        ]
      }
    ]
  });
  //-----------------------------------------------------------------------------------------------------------------------------------------------timeline

  function shock(obj, handler) {
    JT.to(
      {
        n: 0
      },
      1,
      {
        n: 3600,
        ease: JT.Quad.In,
        onUpdate: function() {
          obj.x =
            Math.floor(
              Math.sin(this.curVars.n.num / 180 * Math.PI) *
                this.curVars.n.num /
                1800 *
                100
            ) / 100;
          obj.y =
            Math.floor(
              Math.sin(this.curVars.n.num / 180 * Math.PI / 2) *
                this.curVars.n.num /
                1800 *
                100
            ) / 100;
          obj.updateT();
        },
        onEnd: function() {
          if (handler) handler();
        }
      }
    );
  }

  function anim3(n) {
    JT.kill(scene3);
    var _len = scene3.children.length;
    for (var i = 0; i < _len; i++) {
      var _l = i < 6 ? getRandom(50, 150) * n : getRandom(150, 250) * n;
      var _r1 = getRandom(0, 360);
      var _a1 = _r1 / 180 * Math.PI;
      var _r2 = n == 1 ? getRandom(-10, 10) : getRandom(-80, 80);
      var _a2 = _r2 / 180 * Math.PI;
      var _n1 = Math.sin(_a2) * _l;
      var _n2 = Math.abs(Math.cos(_a2) * _l);
      scene3.children[i]
        .position(Math.cos(_a1) * _n2, _n1, Math.sin(_a1) * _n2)
        .updateT();
    }
    JT.to(scene3, 1, {
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      ease: JT.Quad.Out,
      onUpdate: function() {
        this.target.updateT();
      },
      onEnd: function() {
        JT.to(this.target, 1, {
          scaleX: 0,
          scaleY: 0,
          scaleZ: 0,
          ease: JT.Quad.In,
          onUpdate: function() {
            this.target.updateT();
          }
        });
      }
    });
    JT.fromTo(
      scene3,
      2,
      {
        rotationY: 0
      },
      {
        rotationY: 360,
        onUpdate: function() {
          this.target.updateT();
        }
      }
    );
    JT.fromTo(
      scene3.children,
      2,
      {
        rotationY: 0
      },
      {
        rotationY: -360,
        onUpdate: function() {
          this.target.updateT();
        }
      }
    );
  }

  function anim4() {
    JT.kill(scene1);
    var _len = scene1.children.length;
    var count = 0;
    for (var i = 0; i < _len; i++) {
      var _r = getRandom(0, 1.5);
      var _l = getRandom(400, 600);
      var _r1 = getRandom(0, 360);
      var _a1 = _r1 / 180 * Math.PI;
      var _r2 = getRandom(-80, 80);
      var _a2 = _r2 / 180 * Math.PI;
      var _n1 = Math.sin(_a2) * _l;
      var _n2 = Math.abs(Math.cos(_a2) * _l);
      JT.to(scene1.children[i], 0.7, {
        scaleX: _r,
        scaleY: 1.5 - _r,
        x: Math.cos(_a1) * _n2,
        y: _n1,
        z: Math.sin(_a1) * _n2,
        ease: JT.Quad.Out,
        onUpdate: function() {
          this.target.updateT();
        },
        onEnd: function() {
          JT.to(this.target, 1.5, {
            scaleX: 0,
            scaleY: 0,
            x: 0,
            y: 0,
            z: 0,
            ease: JT.Quad.In,
            onUpdate: function() {
              this.target.updateT();
            },
            onEnd: function() {
              count++;
              if (count >= _len) {
                shock(scene1);
              }
            }
          });
        }
      });
    }

    JT.fromTo(
      scene1,
      3,
      {
        rotationY: 0
      },
      {
        rotationY: 540,
        onUpdate: function() {
          this.target.updateT();
        }
      }
    );
    anim3(2);
  }

  function anim5(obj) {
    spMain.addChild(obj);
    JT.to(obj, 0.2, {
      scaleX: 1,
      scaleY: 1,
      ease: JT.Quad.Out,
      onUpdate: function() {
        this.target.updateT();
      },
      onEnd: function() {
        JT.to(this.target, 2, {
          scaleX: 0.2,
          scaleY: 0.2,
          ease: JT.Quad.In,
          onUpdate: function() {
            this.target.updateT();
          }
        });
      }
    });
    JT.fromTo(
      obj,
      4.4,
      {
        rotationY: -90
      },
      {
        rotationY: 920,
        onUpdate: function() {
          this.target.updateT();
        }
      }
    );
  }

  function anim5_1(obj) {
    spMain.addChild(obj);
    JT.to(obj, 0.2, {
      scaleX: 1,
      scaleY: 1,
      ease: JT.Quad.Out,
      onUpdate: function() {
        this.target.updateT();
      },
      onEnd: function() {
        JT.to(this.target, 5.3, {
          scaleX: 0,
          scaleY: 0,
          ease: JT.Quad.In,
          onUpdate: function() {
            this.target.updateT();
          },
          onEnd: function() {
            logo4.remove();
            scene1.remove();
            scene3.remove();
            anim6();
            gotoIndex();
          }
        });
      }
    });
  }

  function anim6() {
    JT.kill(scene4);
    var _len = scene4.children.length;
    for (var i = 0; i < _len; i++) {
      var _l = getRandom(200, 800);
      var _r1 = getRandom(0, 360);
      var _a1 = _r1 / 180 * Math.PI;
      var _r2 = getRandom(-25, 25);
      var _a2 = _r2 / 180 * Math.PI;
      var _n1 = Math.sin(_a2) * _l;
      var _n2 = Math.abs(Math.cos(_a2) * _l);
      scene4.children[i]
        .position(Math.cos(_a1) * _n2, _n1, Math.sin(_a1) * _n2)
        .scale(1.5)
        .updateT();
    }
    JT.to(scene4, 0.8, {
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
      ease: JT.Quad.Out,
      onUpdate: function() {
        // this.target.updateT();
      },
      onEnd: function() {
        JT.to(this.target, 1, {
          scaleX: 1.5,
          scaleY: 1.5,
          scaleZ: 1.5,
          ease: JT.Quad.In,
          onUpdate: function() {
            // this.target.updateT();
          }
        });
      }
    });
    JT.fromTo(
      scene4,
      2,
      {
        rotationY: 0
      },
      {
        rotationY: 360,
        onUpdate: function() {
          this.target.updateT();
        },
        onEnd: function() {
          this.target.remove();
        }
      }
    );
    JT.fromTo(
      scene4.children,
      2,
      {
        rotationY: 0
      },
      {
        rotationY: -360,
        onUpdate: function() {
          this.target.updateT();
        }
      }
    );
  }

  // spMain.addChild(scene1);
  // spMain.addChild(scene3);
  spMain.addChild(scene4);

  var tl2 = JTL.create();
  tl2.add("l1", 0.5);

  tl2.add(function() {
    $("#main").css({
      background: "url(images/bg-main.png)",
      "background-color": "#b31b20",
      "background-size": "cover"
    });
    // anim4();
    anim5(logo2);
  }, "l1");
  tl2.add(function() {
    logo2.remove();
    //anim4();
    anim5(logo3);
  }, "l1+=3");
  tl2.add(function() {
    logo3.remove();
    anim4();
    anim5_1(logo4);
  }, "l1+=6");
  //创建背景场景

  var bg_num = 20;
  var o = {
      w: 2578,
      h: 1170
    },
    M = o.w / bg_num,
    h = 406,
    Y = [
      {
        url: "1.png"
      },
      {
        url: "2.png"
      },
      {
        url: "3.png"
      },
      {
        url: "4.png"
      },
      {
        url: "5.png"
      },
      {
        url: "6.png"
      },
      {
        url: "7.png"
      },
      {
        url: "8.png"
      },
      {
        url: "9.png"
      },
      {
        url: "10.png"
      },
      {
        url: "11.png"
      },
      {
        url: "12.png"
      },
      {
        url: "13.png"
      },
      {
        url: "14.png"
      },
      {
        url: "15.png"
      },
      {
        url: "16.png"
      },
      {
        url: "17.png"
      },
      {
        url: "18.png"
      },
      {
        url: "19.png"
      },
      {
        url: "20.png"
      }
    ];

  var panoBg = new C3D.Sprite();
  var d = {
      lat: 0,
      lon: 0
    },
    f = {
      lon: 0,
      lat: 0
    };
  var c = {
    lon: 25,
    lat: 0
  };
  var p = true;

  function createPanoBg() {
    panoBg
      .name("panoBg")
      .position(0, 0, 0)
      .update();
    spMain.addChild(panoBg);

    for (var R = 0; R < bg_num; R++) {
      var F = new C3D.Plane(),
        H = -360 / bg_num * R,
        J = H / 180 * Math.PI,
        U = h;
      F.size(M, o.h)
        .position(Math.sin(J) * U, 0, Math.cos(J) * U)
        .rotation(0, H + 180, 0)
        .visibility({
          alpha: 0 //透明度
        })
        .material({
          image: "images/bg/" + Y[R].url,
          bothsides: !1
        })
        .update();
      panoBg.addChild(F);
    }
  }
  createPanoBg();
  //漂浮的物件
  var panoItemsImg = [
      {
        // 卤煮旗帜
        x: -1,
        y: 292,
        w: 157,
        h: 284,
        url: "images/pano/p1.png",
        imgs: ["images/pano/p1/p1-1.png", "images/pano/p1/p1-2.png"],
        l: 10
      },
      {
        // 绿树
        x: 250,
        y: 530,
        w: 313,
        h: 199,
        url: "images/pano/p2.png",
        imgs: [
          "images/pano/p2/p2-1.png",
          "images/pano/p2/p2-2.png",
          "images/pano/p2/p2-3.png"
        ],
        l: 25
      },
      {
        //气球
        x: 200,
        y: 60,
        w: 498,
        h: 221,
        url: "images/pano/p3.png",
        imgs: [
          "images/pano/p3/p3-1.png",
          "images/pano/p3/p3-2.png",
          "images/pano/p3/p3-3.png",
          "images/pano/p3/p3-4.png"
        ],
        l: 10
      },
      {
        x: 630,
        y: 487,
        w: 313,
        h: 100,
        url: "images/pano/p4.png",
        imgs: [
          "images/pano/p4/p4-1.png",
          "images/pano/p4/p4-2.png",
          "images/pano/p4/p4-3.png"
        ],
        l: 25
      },
      {
        //灯笼
        x: 902,
        y: 230,
        w: 157,
        h: 231,
        url: "images/pano/p5.png",
        imgs: ["images/pano/p5/p5-1.png", "images/pano/p5/p5-2.png"],
        l: 10
      },
      {
        //车子
        x: 1023,
        y: 667,
        w: 313,
        h: 211,
        url: "images/pano/p6/p6.png",
        imgs: [
          "images/pano/p6/p6-1.png",
          "images/pano/p6/p6-2.png",
          "images/pano/p6/p6-3.png"
        ],
        l: 25
      },
      // { //风筝
      //   x: 1032,
      //   y: 110,
      //   w: 330,
      //   h: 586,
      //   url: "images/pano/p7.png",
      //   imgs: [
      //     "images/pano/p7/p7-1.png",
      //     "images/pano/p7/p7-2.png"
      //   ],
      //   l: 25
      // },
      {
        // 地上的纸飞机
        x: 258,
        y: 810,
        w: 157,
        h: 137,
        url: "images/pano/p8.png",
        imgs: ["images/pano/p8/p8-1.png", "images/pano/p8/p8-2.png"],
        l: 20
      },
      {
        // 杨门斜街
        x: 1290,
        y: 580,
        w: 157,
        h: 332,
        url: "images/pano/p9.png",
        imgs: ["images/pano/p9/p9-1.png", "images/pano/p9/p9-2.png"],
        l: 20
      },
      // {
      //   x: 2064,
      //   y: 210,
      //   w: 129,
      //   h: 82,
      //   url: "images/pano/p10.png",
      //   imgs: [
      //     "images/pano/p10/p10-1.png"
      //   ],
      //   l: 20
      // },
      {
        // 灯笼
        x: 2322,
        y: 160,
        w: 157,
        h: 185,
        url: "images/pano/p11.png",
        imgs: ["images/pano/p11/p11-1.png", "images/pano/p11/p11-2.png"],
        l: 10
      },
      {
        // 老舍纪念馆
        x: 2322,
        y: 557,
        w: 313,
        h: 319,
        url: "images/pano/p12.png",
        imgs: [
          "images/pano/p12/p12-1.png",
          "images/pano/p12/p12-2.png",
          "images/pano/p12/p12-3.png"
        ],
        l: 1
      }
    ],
    panoItems = new C3D.Sprite();
  panoItems
    .name("panoItems")
    .position(0, 0, 0)
    .update(),
    $.each(panoItemsImg, function(A, B) {
      var g = B,
        E = Math.floor(g.x / M),
        Q = Math.floor((g.x + g.w) / M),
        I = (g.x % M, new C3D.Sprite());
      I.visibility({
        alpha: 0
      }).updateV();
      for (var w = E; Q >= w; w++) {
        var D = new C3D.Plane(),
          Y = -360 / bg_num * w,
          i = Y / 180 * Math.PI,
          R = h;
        D.size(M, g.h)
          .position(
            (Math.sin(i) * R).toFixed(5),
            g.y + g.h / 2 - o.h / 2,
            (Math.cos(i) * R).toFixed(5)
          )
          .rotation(0, Y + 180, 0)
          .material({
            image: g.imgs[w - E],
            bothsides: !1
          })
          .update(),
          I.addChild(D);
      }
      var F = -360 / bg_num * (Q + E) / 2 + 180,
        H = F / 180 * Math.PI,
        J = g.l;
      I.position(Math.sin(H) * J, 0, Math.cos(H) * J).updateT(),
        panoItems.addChild(I);
    });
  spMain.addChild(panoItems);

  var dots1 = "images/btn/btn_aminate_icon.png";
  //点击
  /*
   */
  var c_dots = [
      {
        name: "layer_wa_jqay",
        animateType: "2",
        x: 1700,
        y: 640,
        dot: dots1,
        w: 194,
        h: 72,
        label: "images/btn/btn_fyl2.png"
      },
      {
        name: "layer_wa_wjy",
        animateType: "2",
        x: 1800,
        y: 520,
        dot: dots1,
        w: 194,
        h: 72,
        label: "images/btn/btn_fyl2.png"
      },
      {
        name: "layer_wa_fyl",
        animateType: "2",
        x: 195,
        y: 690,
        dot: dots1,
        w: 194,
        h: 72,
        label: "images/btn/btn_fyl2.png"
      },
      {
        name: "layer_lfx",
        animateType: "2",
        x: 570,
        y: 804,
        dot: dots1,
        w: 194,
        h: 72,
        label: "images/btn/btn_fyl2.png"
      },
      {
        // 胡同1
        name: "layer_zgl",
        animateType: "2",
        x: 1120,
        y: 540,
        dot: dots1,
        w: 194,
        h: 72,
        label: "images/btn/btn_fyl2.png"
      },
      {
        name: "layer_tp",
        animateType: "2",
        x: 1120,
        y: 360,
        dot: dots1,
        w: 169,
        h: 72,
        label: "images/btn/btn_fyl2.png"
      },
      {
        name: "layer_wd",
        animateType: "2",
        x: 780,
        y: 200,
        dot: dots1,
        w: 169,
        h: 72,
        label: "images/btn/btn_fyl2.png"
      },
      {
        name: "layer_qdp",
        animateType: "2",
        x: 520,
        y: 560,
        dot: dots1,
        w: 194,
        h: 72,
        label: "images/btn/btn_fyl2.png"
      },
      {
        name: "layer_zjk",
        animateType: "2",
        x: 1500,
        y: 790,
        dot: dots1,
        w: 194,
        h: 72,
        label: "images/btn/btn_fyl2.png"
      },
      {
        name: "layer_wa_zjk",
        animateType: "2",
        x: 2116,
        y: 260,
        dot: dots1,
        w: 194,
        h: 72,
        label: "images/btn/btn_fyl2.png"
      },
      {
        name: "layer_wjy",
        animateType: "2",
        x: 1415,
        y: 250,
        dot: dots1,
        w: 194,
        h: 72,
        label: "images/btn/btn_fyl2.png"
      },
      {
        name: "layer_fyl",
        animateType: "2",
        x: 2120,
        y: 700,
        dot: dots1,
        w: 194,
        h: 72,
        label: "images/btn/btn_fyl1.png"
      },
      {
        name: "layer_rqly",
        animateType: "2",
        x: 930,
        y: 840,
        dot: dots1,
        w: 194,
        h: 72,
        label: "images/btn/btn_fyl1.png"
      }
      // {
      //   name: "layer_wa_jqay",
      //   animateType: "3",
      //   x: 2277,
      //   y: 470,
      //   dot: dots1,
      //   w: 230,
      //   h: 72,
      //   label: "images/btn/btn_jqay.png"
      // }
    ],
    panoDots = new C3D.Sprite();
  panoDots
    .name("panoDots")
    .visibility({
      alpha: 0
    })
    .position(0, 0, 0)
    .update();
  $.each(c_dots, function(A, B) {
    var g = B,
      Q = -360 * (g.x - 80) / o.w,
      G = 90 * (g.y - o.h / 2) / o.h,
      M = Q / 180 * Math.PI,
      Y = h - 80,
      i = C3D.create({
        type: "sprite",
        name: g.name,
        scale: [0.6],
        children: [
          {
            type: "plane",
            name: "dot",
            size: [128, 127],
            position: [0, 2, 2],
            rotation: [G, 0, 0],
            material: [
              {
                image: g.dot
              }
            ],
            bothsides: !1
          },
          {
            type: "plane",
            name: "label",
            size: [0, g.h],
            rotation: [G, 0, 0],
            origin: [-18, 33],
            material: [
              {
                image: g.label
              }
            ],
            bothsides: !1
          }
        ]
      });
    i
      .position(Math.sin(M) * Y, 0.9 * (g.y - o.h / 2), Math.cos(M) * Y)
      .rotation(0, Q + 180 - 5, 0)
      .updateT(),
      i.on("touchend", function() {
        Dialog.showDiv(g.name, g.animateType);
      }),
      (i.r0 = Q),
      (i.w0 = g.w),
      JT.to(i.dot, 0.4, {
        scaleX: 1.1,
        scaleY: 1.1,
        yoyo: !0,
        repeat: -1,
        ease: JT.Quad.InOut,
        onUpdate: function() {
          this.target.updateT();
        }
      }),
      panoDots.addChild(i);
  });

  spMain.addChild(panoDots);

  var originTouchPos = {
      x: 0,
      y: 0
    },
    oldTouchPos = {
      x: 0,
      y: 0
    },
    newTouchPos = {
      x: 0,
      y: 0
    },
    firstDir = "",
    originTime = 0,
    oldTime = 0,
    newTime = 0,
    dx = 0,
    dy = 0,
    ax = 0,
    ay = 0,
    time = 0;
  var onTouchStart = function(t) {
    (firstDir = ""), (t = t.changedTouches[0]);

    originTouchPos.x = oldTouchPos.x = newTouchPos.x = t.clientX;
    originTouchPos.y = oldTouchPos.y = newTouchPos.y = t.clientY;
    originTime = oldTime = newTime = Date.now();
    (dx = dy = ax = ay = 0),
      ql.on("touchmove", onTouchMove),
      ql.on("touchend", onTouchEnd);
  };
  ql.on("touchstart", onTouchStart);
  var onTouchMove = function(t) {
    return (
      (t = t.changedTouches[0]),
      (newTouchPos.x = t.clientX),
      (newTouchPos.y = t.clientY),
      (newTime = Date.now()),
      checkGesture(),
      (oldTouchPos.x = newTouchPos.x),
      (oldTouchPos.y = newTouchPos.y),
      (oldTime = newTime),
      !1
    );
  };
  var onTouchEnd = function() {
    newTime = Date.now();
    var t = (newTime - oldTime) / 1e3;

    ql.off("touchmove", onTouchMove), ql.off("touchend", onTouchEnd);
  };

  function checkGesture() {
    (dx = fixed2(newTouchPos.x - originTouchPos.x)),
      (dy = fixed2(newTouchPos.y - originTouchPos.y)),
      (ax = fixed2(newTouchPos.x - oldTouchPos.x)),
      (ay = fixed2(newTouchPos.y - oldTouchPos.y)),
      (time = (newTime - oldTime) / 1e3),
      "" == firstDir &&
        (Math.abs(ax) > Math.abs(ay)
          ? (firstDir = "x")
          : Math.abs(ax) < Math.abs(ay) && (firstDir = "y"));

    if (!p) {
      (c.lon = (c.lon - 0.2 * ax) % 360),
        (c.lat = Math.max(-90, Math.min(90, c.lat + 0.2 * ay)));
    }
  }

  function fixed2(t) {
    return Math.floor(100 * t) / 100;
  }
  requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) {
      setTimeout(callback, 1000 / 60);
    };

  //执行move动画
  function actiondh() {
    var t = (d.lon + f.lon + c.lon) % 360,
      i = 0.35 * (d.lat + f.lat + c.lat);
    t - panoBg.rotationY > 180 && (panoBg.rotationY += 360),
      t - panoBg.rotationY < -180 && (panoBg.rotationY -= 360);
    var n = t - panoBg.rotationY,
      a = i - panoBg.rotationX;
    Math.abs(n) < 0.1 ? (panoBg.rotationY = t) : (panoBg.rotationY += 0.3 * n),
      Math.abs(a) < 0.1
        ? (panoBg.rotationX = i)
        : (panoBg.rotationX += 0.15 * a),
      panoBg.updateT();
    (panoDots.rotationY = panoBg.rotationY),
      (panoDots.rotationX = panoBg.rotationX),
      panoDots.updateT(),
      t - panoItems.rotationY > 180 && (panoItems.rotationY += 360),
      t - panoItems.rotationY < -180 && (panoItems.rotationY -= 360);
    var o = t - panoItems.rotationY,
      r = i - panoItems.rotationX;
    Math.abs(o) < 0.1
      ? (panoItems.rotationY = t)
      : (panoItems.rotationY += 0.25 * o),
      Math.abs(r) < 0.1
        ? (panoItems.rotationX = i)
        : (panoItems.rotationX += 0.15 * r),
      panoItems.updateT();

    var s12 = -150 - 20 * Math.abs(n);
    (spMain.z += 0.1 * (s12 - spMain.z)),
      spMain.updateT(),
      panoDots_show(panoDots.rotationY),
      (A = requestAnimationFrame(actiondh));
  }

  function panoDots_show(t) {
    var i = (-180 - t) % 360;
    i = i > 0 ? i - 360 : i;
    for (var e = 0, a = panoDots.children.length; a > e; e++) {
      var o = panoDots.children[e];
      o.r0 > i - 5 && o.r0 < i + 25
        ? 0 == o.label.width &&
          (JT.kill(o.label),
          JT.to(o.label, 0.3, {
            width: o.w0,
            ease: JT.Quad.Out,
            onUpdate: function() {
              this.target.updateS();
            }
          }))
        : o.label.width == o.w0 &&
          (JT.kill(o.label),
          JT.to(o.label, 0.3, {
            width: 0,
            ease: JT.Quad.Out,
            onUpdate: function() {
              this.target.updateS();
            }
          }));
    }
  }
  window.ontouchmove = function(e) {
    e.preventDefault();
  };

  //重力感应
  var o2 = new Orienter();
  o2.handler = function(t) {
    (d.lon = -t.lon), (d.lat = t.lat);
    if (p) {
      (f.lat = -d.lat), (f.lon = -d.lon);
    }
  };
  o2.init();
  //执行主场景入场动画
  function gotoIndex() {
    JT.fromTo(
      spMain,
      4,
      {
        z: -2200
      },
      {
        z: -150,
        ease: JT.Quad.Out,
        onUpdate: function() {
          JT.to($("#bg"), 1, {
            opacity: 1
          });
          this.target.updateT().updateV();
        },
        onEnd: function() {
          p = false;
          actiondh();

          // JT.to($("#bg"), 1, {
          //   opacity: 1
          // });
          // $(".govr").show();// 右上角的视频跳转按钮
        }
      }
    );
    JT.fromTo(
      panoBg,
      4,
      {
        rotationY: -720
      },
      {
        rotationY: 25,
        ease: JT.Quad.Out,
        onUpdate: function() {
          this.target.updateT().updateV();
        },
        onEnd: function() {}
      }
    );
    for (var A = 0, B = panoBg.children.length; B > A; A++) {
      JT.from(panoBg.children[A], 0.5, {
        x: 0,
        z: 0,
        scaleX: 0,
        scaleY: 0,
        delay: 0.05 * A,
        ease: JT.Quad.Out,
        onUpdate: function() {
          this.target.updateT();
        },
        onStart: function() {
          this.target
            .visibility({
              alpha: 1
            })
            .updateV();
        }
      });
    }
    for (var g = 0, C = panoItems.children.length; C > g; g++) {
      JT.from(panoItems.children[g], 2, {
        x: 0,
        z: 0,
        scaleX: 0.01,
        scaleY: 0.01,
        scaleZ: 0.01,
        delay: Math.random() + 2,
        ease: JT.Quad.Out,
        onUpdate: function() {
          this.target.updateT();
        },
        onStart: function() {
          this.target
            .visibility({
              alpha: 1
            })
            .updateV();
        }
      });
    }
    JT.fromTo(
      panoItems,
      4,
      {
        rotationY: -720
      },
      {
        rotationY: 25,
        ease: JT.Quad.Out,
        onUpdate: function() {
          this.target.updateT().updateV();
        }
      }
    );
    JT.fromTo(
      panoDots,
      2,
      {
        rotationY: -360,
        alpha: 0
      },
      {
        rotationY: 25,
        alpha: 1,
        delay: 2,
        ease: JT.Quad.Out,
        onUpdate: function() {
          this.target.updateT().updateV();
        },
        onStart: function() {
          this.target
            .visibility({
              alpha: 1
            })
            .updateV();
        }
      }
    );
  }
  var resize = function() {
    setTimeout(function() {
      ql.size(window.innerWidth, window.innerHeight).update();
    }, 500);
  };
  $(window).on("resize", function() {
    resize();
  });

  // 点击的弹框出现的动画
  var Dialog = {
    flg: "",
    isAnimate: true,
    showDiv: function(Dsobj, type) {
      // 点击按钮，div出现
      switch (Dsobj) {
        case "layer_lfx":
          Dialog.flg = "layer_lfx";
          break;
        case "layer_tp":
          Dialog.flg = "layer_tp";
          break;
        case "layer_wd":
          Dialog.flg = "layer_wd";
          break;
        case "layer_qdp":
          Dialog.flg = "layer_qdp";
          break;
        case "layer_zgl":
          Dialog.flg = "layer_zgl";
          break;
        case "layer_wa_fyl":
          Dialog.flg = "layer_wa_fyl";
          break;
        case "layer_fyl":
          break;
        case "layer_wa_zjk":
        case "layer_zjk":
          break;
        case "layer_wjy":
          break;
        case "layer_rqly":
          break;
      }
      Dialog.isAnimate = true;
      Dialog.showMask();
      $(".layerbox").hide();
      $Dsobj = $("#" + Dsobj);
      $Dsobj.addClass("layerbox");
      $Dsobj.show();
      if (type == "1") {
        $(".btn_close").hide();
        $("#layer_qdp .box").width("0");
        JT.fromTo(
          "#layer_qdp .box",
          0.3,
          {
            scaleX: 0,
            scaleY: 0
          },
          {
            scaleX: 1,
            scaleY: 1,
            ease: JT.Quad.Out,
            onEnd: function() {
              JT.fromTo(
                "#layer_qdp .box",
                1,
                {
                  width: "0rem"
                },
                {
                  width: "5.2rem",
                  ease: JT.Quad.Out,
                  onEnd: function() {
                    $(".btn_close").show();
                    Dialog.isAnimate = false;
                  }
                }
              );
            }
          }
        );
      } else if (type == "2") {
        $("#" + Dsobj + " .box").height("0");
        JT.fromTo(
          "#" + Dsobj + " .box",
          0.3,
          {
            scaleX: 0,
            scaleY: 0
          },
          {
            scaleX: 1,
            scaleY: 1,
            ease: JT.Quad.Out,
            onEnd: function() {
              JT.fromTo(
                "#" + Dsobj + " .box",
                1,
                {
                  height: "0rem"
                },
                {
                  height: "6.5rem",
                  ease: JT.Quad.Out,
                  onEnd: function() {
                    $(".btn_close").show();
                    Dialog.isAnimate = false;
                  }
                }
              );
            }
          }
        );
      } else if (type == "3") {
        $("#" + Dsobj + " .box").height("0");
        JT.fromTo(
          "#" + Dsobj + " .box",
          0.3,
          {
            scaleX: 0,
            scaleY: 0
          },
          {
            scaleX: 1,
            scaleY: 1,
            ease: JT.Quad.Out,
            onEnd: function() {
              JT.fromTo(
                "#" + Dsobj + " .box",
                1,
                {
                  height: "0rem"
                },
                {
                  height: "5.19rem",
                  ease: JT.Quad.Out,
                  onEnd: function() {
                    $(".btn_close").show();
                    Dialog.isAnimate = false;
                  }
                }
              );
            }
          }
        );
      }
      $(".btn_close").unbind();
      $(".btn_close").bind("click", function() {
        Dialog.close();
      });
      return false;
    },
    showMask: function() {
      var height = $(window).height();
      $("body").append(
        "<div style='background:#000; display:none; filter:alpha(opacity=90);opacity: 0.5; z-index:99;  width:100%;  position:absolute; left:0; top:0;'  id='bgdiv'></div>"
      );
      $("#bgdiv").css("height", height);
      $("#bgdiv").show();
    },
    close: function(Dsobj, type) {
      // 点击关闭按钮，弹层消失
      Dsobj = Dialog.flg;

      $(".layerbox").hide();
      $("#bgdiv").hide(function() {
        $("#bgdiv").remove();
      });
    }
  };

  var audioEl = document.getElementById("bgm");

  function ready() {
    document.getElementById("bgm").play();
    document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
      document.getElementById("bgm").play();
    });
  }
  audioEl.addEventListener(
    "play",
    function() {
      $(".music").removeClass("pause");
    },
    false
  );

  // function forceSafariPlayAudio() {
  //   audioEl.load();
  //   audioEl.play();
  // }

  simpScroller(document.querySelector(".vertical_wa_jqay"));
  simpScroller(document.querySelector(".vertical_wa_wjy"));
  simpScroller(document.querySelector(".vertical_wa_zjk"));
  simpScroller(document.querySelector(".vertical_wa_fyl"));
  simpScroller(document.querySelector(".vertical_zjk"));
  simpScroller(document.querySelector(".vertical_fyl"));
  simpScroller(document.querySelector(".vertical_wjy"));
  simpScroller(document.querySelector(".vertical_tp"));
  simpScroller(document.querySelector(".vertical_wd"));
  simpScroller(document.querySelector(".vertical_qdp"));
  simpScroller(document.querySelector(".vertical_rqly"));
  simpScroller(document.querySelector(".vertical_zgl"));
  simpScroller(document.querySelector(".vertical_lfx"));

  //gotoIndex();
  loader.start();

  var ispay = true;
  //tvc视频按钮点击
  $(".btn_showVideo").click(function() {
    if (Dialog.isAnimate) {
      return;
    }
    $("#qp_video").show();
    videoPlayer(
      $(this).attr("data-vid"),
      "100%",
      "100%",
      "mod_player",
      "n",
      "1"
    );
    $("#bgm")[0].pause();
    $(".music").addClass("pause");
  });
  $("#qp_video .close").click(function() {
    $("#qp_video").hide();
    $("#mod_player").html("");
    if (ispay) {
      $("#bgm")[0].play();
      $(".music").removeClass("pause");
    }
  });

  $(".music").click(function() {
    if ($(".music").attr("class") == "music") {
      $("#bgm")[0].pause();
      $(".music").addClass("pause");
      ispay = false;
    } else {
      $("#bgm")[0].play();
      $(".music").removeClass("pause");
      ispay = true;
    }
  });
})();
