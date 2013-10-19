    function draw(ctx) {

      var alpha = ctx.globalAlpha;

      // body/jumper orange
      ctx.save();

      // body/jumper orange/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(388.6, 507.6);
      ctx.lineTo(388.6, 582.1);
      ctx.bezierCurveTo(388.6, 601.8, 372.6, 617.8, 352.9, 617.8);
      ctx.lineTo(283.1, 617.8);
      ctx.bezierCurveTo(263.5, 617.8, 247.5, 601.8, 247.5, 582.1);
      ctx.lineTo(247.5, 507.6);
      ctx.lineTo(388.6, 507.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(233, 81, 5)";
      ctx.fill();

      // body/jumper orange/Tracciato
      ctx.globalAlpha = alpha * 0.30;
      ctx.beginPath();
      ctx.moveTo(286.8, 582.9);
      ctx.bezierCurveTo(286.8, 582.7, 277.8, 578.9, 277.8, 578.9);
      ctx.lineTo(277.3, 539.6);
      ctx.lineTo(277.1, 531.4);
      ctx.lineTo(268.9, 528.5);
      ctx.lineTo(274.0, 507.4);
      ctx.lineTo(264.7, 507.4);
      ctx.lineTo(247.5, 507.4);
      ctx.lineTo(247.5, 582.2);
      ctx.bezierCurveTo(247.5, 591.1, 250.6, 606.1, 257.5, 606.2);
      ctx.bezierCurveTo(265.7, 606.3, 286.8, 583.8, 286.8, 582.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // body/jumper orange/Tracciato composto
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // body/jumper orange/Tracciato composto/Tracciato
      ctx.moveTo(407.7, 488.0);
      ctx.lineTo(407.7, 581.3);
      ctx.bezierCurveTo(407.7, 612.2, 382.5, 637.4, 351.5, 637.4);
      ctx.lineTo(284.6, 637.4);
      ctx.bezierCurveTo(253.6, 637.4, 228.4, 612.2, 228.4, 581.3);
      ctx.lineTo(228.4, 488.0);
      ctx.lineTo(407.7, 488.0);
      ctx.closePath();

      // body/jumper orange/Tracciato composto/Tracciato
      ctx.moveTo(385.7, 581.3);
      ctx.lineTo(385.7, 510.0);
      ctx.lineTo(250.4, 510.0);
      ctx.lineTo(250.4, 581.3);
      ctx.bezierCurveTo(250.4, 600.1, 265.7, 615.4, 284.6, 615.4);
      ctx.lineTo(351.5, 615.4);
      ctx.bezierCurveTo(370.4, 615.4, 385.7, 600.1, 385.7, 581.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(34, 30, 31)";
      ctx.fill();

      // body/jumper orange/Tracciato
      ctx.beginPath();
      ctx.moveTo(254.5, 611.6);
      ctx.lineTo(289.7, 580.3);
      ctx.lineTo(346.5, 580.3);
      ctx.lineTo(380.9, 611.6);
      ctx.lineWidth = 6.0;
      ctx.strokeStyle = "rgb(34, 30, 31)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // body/jumper orange/Tracciato
      ctx.beginPath();
      ctx.moveTo(266.4, 611.6);
      ctx.lineTo(292.3, 588.2);
      ctx.lineTo(342.3, 588.2);
      ctx.lineTo(369.7, 615.7);
      // This artwork uses an unsupported dash style
      ctx.lineWidth = 3.0;
      ctx.stroke();

      // body/jumper orange/Tracciato
      ctx.beginPath();
      ctx.moveTo(352.8, 560.4);
      ctx.lineTo(363.4, 567.1);
      ctx.bezierCurveTo(363.4, 567.1, 365.3, 574.9, 356.2, 576.0);
      ctx.lineTo(347.4, 565.5);
      ctx.fillStyle = "rgb(187, 189, 191)";
      ctx.fill();
      ctx.lineWidth = 6.0;
      ctx.stroke();

      // body/jumper orange/Tracciato
      ctx.beginPath();
      ctx.moveTo(344.6, 524.6);
      ctx.bezierCurveTo(344.6, 530.1, 340.2, 534.5, 334.7, 534.5);
      ctx.bezierCurveTo(329.2, 534.5, 324.7, 530.1, 324.7, 524.6);
      ctx.bezierCurveTo(324.7, 519.0, 329.2, 514.6, 334.7, 514.6);
      ctx.bezierCurveTo(340.2, 514.6, 344.6, 519.0, 344.6, 524.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(34, 30, 31)";
      ctx.fill();

      // body/jumper orange/Tracciato
      ctx.beginPath();
      ctx.moveTo(331.0, 521.2);
      ctx.bezierCurveTo(331.0, 521.2, 315.0, 539.5, 334.8, 562.7);
      ctx.bezierCurveTo(334.8, 562.7, 341.3, 570.4, 349.5, 563.6);
      ctx.bezierCurveTo(357.7, 556.7, 354.7, 552.0, 351.2, 549.3);
      ctx.bezierCurveTo(347.7, 546.5, 335.5, 535.1, 339.2, 526.3);
      ctx.bezierCurveTo(339.2, 526.3, 342.2, 521.2, 331.0, 521.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 191)";
      ctx.fill();
      ctx.stroke();

      // body/jumper orange/Tracciato
      ctx.beginPath();
      ctx.moveTo(283.7, 561.4);
      ctx.lineTo(273.0, 568.1);
      ctx.bezierCurveTo(273.0, 568.1, 271.1, 575.8, 280.3, 576.9);
      ctx.lineTo(289.0, 566.4);
      ctx.fillStyle = "rgb(208, 210, 211)";
      ctx.fill();
      ctx.stroke();

      // body/jumper orange/Tracciato
      ctx.beginPath();
      ctx.moveTo(291.8, 525.5);
      ctx.bezierCurveTo(291.8, 531.0, 296.3, 535.5, 301.8, 535.5);
      ctx.bezierCurveTo(307.3, 535.5, 311.7, 531.0, 311.7, 525.5);
      ctx.bezierCurveTo(311.7, 520.0, 307.3, 515.5, 301.8, 515.5);
      ctx.bezierCurveTo(296.3, 515.5, 291.8, 520.0, 291.8, 525.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(34, 30, 31)";
      ctx.fill();

      // body/jumper orange/Tracciato
      ctx.beginPath();
      ctx.moveTo(305.4, 522.2);
      ctx.bezierCurveTo(305.4, 522.2, 321.4, 540.4, 301.6, 563.7);
      ctx.bezierCurveTo(301.6, 563.7, 295.1, 571.4, 286.9, 564.5);
      ctx.bezierCurveTo(278.8, 557.7, 281.8, 553.0, 285.3, 550.2);
      ctx.bezierCurveTo(288.8, 547.5, 300.9, 536.1, 297.3, 527.3);
      ctx.bezierCurveTo(297.3, 527.3, 294.2, 522.2, 305.4, 522.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 191)";
      ctx.fill();
      ctx.stroke();

      // body/jumper orange/Tracciato
      ctx.beginPath();
      ctx.moveTo(358.0, 530.0);
      ctx.lineTo(387.9, 524.0);
      ctx.lineWidth = 8.0;
      ctx.stroke();

      // body/jumper orange/Tracciato
      ctx.beginPath();
      ctx.moveTo(279.2, 530.0);
      ctx.lineTo(241.4, 522.6);
      ctx.stroke();
      ctx.restore();
      ctx.restore();
    }
