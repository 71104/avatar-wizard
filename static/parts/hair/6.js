    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // hair/6
      ctx.save();

      // hair/6/fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(344.0, 441.0);
      ctx.bezierCurveTo(344.0, 441.0, 406.9, 441.0, 406.4, 378.0);
      ctx.bezierCurveTo(405.9, 315.0, 406.4, 206.0, 406.4, 206.0);
      ctx.bezierCurveTo(406.4, 206.0, 410.9, 126.6, 293.8, 126.6);
      ctx.lineTo(217.8, 126.6);
      ctx.bezierCurveTo(100.8, 126.6, 105.3, 206.0, 105.3, 206.0);
      ctx.bezierCurveTo(105.3, 206.0, 105.8, 315.0, 105.3, 378.0);
      ctx.bezierCurveTo(104.8, 441.0, 167.6, 441.0, 167.6, 441.0);
      ctx.lineTo(170.9, 382.8);
      ctx.bezierCurveTo(135.9, 378.9, 137.9, 327.4, 137.9, 327.4);
      ctx.lineTo(137.9, 231.9);
      ctx.lineTo(375.9, 231.9);
      ctx.lineTo(377.4, 338.0);
      ctx.bezierCurveTo(377.4, 338.0, 372.4, 376.8, 343.1, 382.8);
      ctx.lineTo(344.0, 441.0);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(145, 97, 64)";
      ctx.fill();

      // hair/6/stroke

      // hair/6/stroke/Tracciato
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(301.1, 144.2);
      ctx.bezierCurveTo(301.1, 144.2, 381.5, 137.8, 389.9, 211.2);
      ctx.bezierCurveTo(389.9, 211.2, 355.0, 159.3, 301.1, 144.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // hair/6/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(153.2, 142.2);
      ctx.bezierCurveTo(153.2, 142.2, 108.3, 162.5, 109.6, 194.8);
      ctx.bezierCurveTo(110.9, 227.2, 109.6, 338.3, 109.6, 338.3);
      ctx.bezierCurveTo(109.6, 338.3, 100.5, 383.1, 113.8, 404.0);
      ctx.bezierCurveTo(127.2, 424.8, 129.9, 426.3, 129.9, 426.3);
      ctx.lineTo(144.9, 415.8);
      ctx.bezierCurveTo(144.9, 415.8, 119.0, 409.5, 118.4, 350.0);
      ctx.bezierCurveTo(117.9, 290.5, 118.4, 205.8, 118.4, 205.8);
      ctx.bezierCurveTo(118.4, 205.8, 115.8, 165.3, 158.2, 144.0);
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // hair/6/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(385.3, 339.0);
      ctx.bezierCurveTo(385.3, 339.0, 386.8, 407.0, 352.3, 411.0);
      ctx.lineTo(346.0, 405.0);
      ctx.lineTo(346.7, 386.8);
      ctx.bezierCurveTo(346.7, 386.8, 372.8, 373.0, 374.3, 356.3);
      ctx.fill();

      // hair/6/stroke/Tracciato
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(231.8, 126.6);
      ctx.bezierCurveTo(231.8, 126.6, 193.4, 127.9, 178.6, 181.0);
      ctx.bezierCurveTo(178.6, 181.0, 213.5, 130.0, 282.0, 131.0);
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();

      // hair/6/stroke/Tracciato composto
      ctx.beginPath();

      // hair/6/stroke/Tracciato composto/Tracciato
      ctx.moveTo(344.0, 449.0);
      ctx.bezierCurveTo(339.6, 449.0, 336.1, 445.5, 336.0, 441.1);
      ctx.lineTo(335.1, 383.0);
      ctx.bezierCurveTo(335.1, 379.1, 337.8, 375.8, 341.5, 375.0);
      ctx.bezierCurveTo(363.4, 370.5, 368.7, 341.6, 369.4, 337.5);
      ctx.lineTo(368.0, 239.9);
      ctx.lineTo(145.9, 239.9);
      ctx.lineTo(145.9, 327.4);
      ctx.bezierCurveTo(145.9, 327.5, 145.9, 327.6, 145.9, 327.7);
      ctx.bezierCurveTo(145.9, 328.1, 144.6, 371.8, 171.8, 374.9);
      ctx.bezierCurveTo(176.0, 375.4, 179.1, 379.1, 178.9, 383.3);
      ctx.lineTo(175.6, 441.5);
      ctx.bezierCurveTo(175.4, 445.7, 171.9, 449.0, 167.6, 449.0);
      ctx.bezierCurveTo(166.3, 449.0, 136.2, 448.8, 115.6, 428.0);
      ctx.bezierCurveTo(103.2, 415.6, 97.1, 398.8, 97.3, 378.0);
      ctx.bezierCurveTo(97.7, 316.8, 97.3, 211.0, 97.3, 206.2);
      ctx.bezierCurveTo(97.1, 203.1, 96.7, 175.4, 119.1, 151.8);
      ctx.bezierCurveTo(139.9, 129.7, 173.1, 118.6, 217.8, 118.6);
      ctx.lineTo(293.8, 118.6);
      ctx.bezierCurveTo(338.5, 118.6, 371.7, 129.7, 392.6, 151.8);
      ctx.bezierCurveTo(414.9, 175.4, 414.5, 203.1, 414.4, 206.2);
      ctx.bezierCurveTo(414.4, 211.0, 413.9, 316.8, 414.4, 378.0);
      ctx.bezierCurveTo(414.5, 398.8, 408.4, 415.6, 396.1, 428.0);
      ctx.bezierCurveTo(375.5, 448.8, 345.3, 449.0, 344.0, 449.0);
      ctx.closePath();

      // hair/6/stroke/Tracciato composto/Tracciato
      ctx.moveTo(217.8, 134.6);
      ctx.bezierCurveTo(177.7, 134.6, 148.4, 144.1, 130.7, 162.8);
      ctx.bezierCurveTo(112.2, 182.4, 113.2, 205.3, 113.2, 205.6);
      ctx.bezierCurveTo(113.2, 205.7, 113.3, 205.9, 113.3, 206.0);
      ctx.bezierCurveTo(113.3, 207.1, 113.7, 315.8, 113.3, 378.1);
      ctx.bezierCurveTo(113.1, 394.4, 117.7, 407.4, 126.8, 416.7);
      ctx.bezierCurveTo(137.2, 427.2, 151.5, 431.0, 160.1, 432.3);
      ctx.lineTo(162.5, 389.3);
      ctx.bezierCurveTo(148.7, 385.0, 138.7, 373.6, 133.6, 355.8);
      ctx.bezierCurveTo(129.6, 342.1, 129.8, 329.0, 129.9, 327.3);
      ctx.lineTo(129.9, 231.9);
      ctx.bezierCurveTo(129.9, 227.4, 133.5, 223.9, 137.9, 223.9);
      ctx.lineTo(375.9, 223.9);
      ctx.bezierCurveTo(380.3, 223.9, 383.8, 227.4, 383.9, 231.7);
      ctx.lineTo(385.4, 337.9);
      ctx.bezierCurveTo(385.4, 338.3, 385.4, 338.7, 385.3, 339.0);
      ctx.bezierCurveTo(385.3, 339.5, 383.9, 350.1, 378.5, 361.6);
      ctx.bezierCurveTo(372.1, 375.2, 362.8, 384.5, 351.2, 388.8);
      ctx.lineTo(351.9, 432.2);
      ctx.bezierCurveTo(360.5, 430.9, 374.5, 427.1, 384.8, 416.7);
      ctx.bezierCurveTo(393.9, 407.4, 398.5, 394.4, 398.4, 378.1);
      ctx.bezierCurveTo(397.9, 315.8, 398.4, 207.1, 398.4, 206.0);
      ctx.bezierCurveTo(398.4, 205.9, 398.4, 205.7, 398.4, 205.6);
      ctx.bezierCurveTo(398.4, 205.4, 399.3, 182.0, 380.7, 162.5);
      ctx.bezierCurveTo(363.0, 144.0, 333.8, 134.6, 293.8, 134.6);
      ctx.lineTo(217.8, 134.6);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
