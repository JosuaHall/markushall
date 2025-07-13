import React, { useState, useEffect } from "react";
import pic_1 from "../pictures/Gallery/pic_001_ls_ute.jpg";
import pic_2 from "../pictures/Gallery/pic_002_ls_intro.jpg";
import pic_3 from "../pictures/Gallery/pic_003_ls_tina.jpg";
import pic_4 from "../pictures/Gallery/pic_004_ls_beate.jpg";
import pic_5 from "../pictures/Gallery/pic_005_ls_favorite3.jpg";
import pic_6 from "../pictures/Gallery/pic_006_ls_favorite4.jpg";
import pic_7 from "../pictures/Gallery/pic_007_ls_band.jpg";
import pic_8 from "../pictures/Gallery/pic_008_ls_stefan.jpg";
import pic_9 from "../pictures/Gallery/pic_009_ls_maggy.jpg";
import pic_10 from "../pictures/Gallery/pic_010_ls_manu_beate.jpg";
import pic_11 from "../pictures/Gallery/pic_011_ls_iris.jpg";
import pic_12 from "../pictures/Gallery/pic_012_ls_dora.jpg";
import pic_13 from "../pictures/Gallery/pic_013_ls_nobby.jpg";
import pic_14 from "../pictures/Gallery/pic_014_ls_lissy.jpg";
import pic_15 from "../pictures/Gallery/pic_015_ls_manu.jpg";
import pic_16 from "../pictures/Gallery/pic_016_ls_nobby3.jpg";
import pic_17 from "../pictures/Gallery/pic_017_ls_markus.jpg";
import pic_18 from "../pictures/Gallery/pic_018_ls_martin.jpg";
import pic_19 from "../pictures/Gallery/pic_019_ls_herz_und_herz.jpg";
import pic_20 from "../pictures/Gallery/pic_020_bdp_markus.jpg";
import pic_21 from "../pictures/Gallery/pic_021_mukis_start.jpg";

import pic1 from "../pictures/Gallery/pic1_bdp_1_solo1.JPG";
import pic2 from "../pictures/Gallery/pic2_bdp_2_band.JPG";
import pic3 from "../pictures/Gallery/pic3_bdp_3_fan.JPG";
import pic4 from "../pictures/Gallery/pic4_bdp_4_band.JPG";
import pic5 from "../pictures/Gallery/pic5_bdp_5_young.JPG";
import pic6 from "../pictures/Gallery/pic6_bdp_6_allein.JPG";
import pic7 from "../pictures/Gallery/pic7_bdp_7_men.JPG";
import pic8 from "../pictures/Gallery/pic8_bdp_8_band_v_ob.JPG";
import pic9 from "../pictures/Gallery/pic9_bdp_9_team.JPG";
import pic10 from "../pictures/Gallery/pic10_bdp_10_chor.JPG";
import pic11 from "../pictures/Gallery/pic11_bdp_11_nobby.JPG";
import pic12 from "../pictures/Gallery/pic12_bdp_12_tanz.JPG";
import pic13 from "../pictures/Gallery/pic13_bdp_13_nobby_joachim.JPG";
import pic14 from "../pictures/Gallery/pic14_dbv_achterbahn.JPG";
import pic15 from "../pictures/Gallery/pic15_dbv_geisterbahn.JPG";
import pic16 from "../pictures/Gallery/pic16_dbv_hunde.JPG";
import pic17 from "../pictures/Gallery/pic17_dbv_josu_herz.JPG";
import pic18 from "../pictures/Gallery/pic18_dbv_josu2.JPG";
import pic19 from "../pictures/Gallery/pic19_dbv_kids1.JPG";
import pic20 from "../pictures/Gallery/pic20_dbv_kids2.JPG";
import pic21 from "../pictures/Gallery/pic21_dbv_laura.JPG";
import pic22 from "../pictures/Gallery/pic22_dbv_tafel.JPG";
import pic23 from "../pictures/Gallery/pic23_dbv_ute.JPG";
import pic24 from "../pictures/Gallery/pic24_fae_laura.JPG";
import pic25 from "../pictures/Gallery/pic25_fae_maria_joseph.JPG";
import pic26 from "../pictures/Gallery/pic26_fae_team.jpg";
import pic27 from "../pictures/Gallery/pic27_noah_flut_big.gif";
import pic28 from "../pictures/Gallery/pic28_noah_auf_deck_big.gif";
import pic29 from "../pictures/Gallery/pic29_noah_gott_malt_mit_bunten_farben_big.gif";
import pic30 from "../pictures/Gallery/pic30_noah_maeuse_big.gif";
import pic31 from "../pictures/Gallery/pic31_noah_schirme_big.gif";
import pic32 from "../pictures/Gallery/pic32_noah_wetterstation_big.gif";
import pic33 from "../pictures/Gallery/pic33_mukis_1.JPG";
import pic34 from "../pictures/Gallery/pic34_mukis_2.JPG";
import pic35 from "../pictures/Gallery/pic35_mukis_3.JPG";
import pic36 from "../pictures/Gallery/pic36_mukis_gips.JPG";
import pic37 from "../pictures/Gallery/pic37_mukis_kreis.JPG";
import pic38 from "../pictures/Gallery/pic38_mukis_markus2.JPG";
import pic39 from "../pictures/Gallery/pic39_ls_grp1.png";
import pic40 from "../pictures/Gallery/pic40_ls_grp3.jpg";
import pic41 from "../pictures/Gallery/pic41_ls_prem1.JPG";
import pic42 from "../pictures/Gallery/pic42_ls_prem2.JPG";
import pic44 from "../pictures/Gallery/pic44_lsp_grp2.jpg";
import pic45 from "../pictures/Gallery/pic45_ls_band.jpg";
import pic50 from "../pictures/Gallery/pic50_tts_banner.JPG";
import pic51 from "../pictures/Gallery/pic51_tts_batseba.JPG";
import pic52 from "../pictures/Gallery/pic52_tts_jonathan.JPG";
import pic53 from "../pictures/Gallery/pic53_tts_rueckseiteflyer_big.gif";
import pic54 from "../pictures/Gallery/pic54_tts_saul.JPG";
import pic55 from "../pictures/Gallery/pic55_tts_saul_doeg.JPG";
import pic56 from "../pictures/Gallery/pic56_tts_simon.JPG";
import pic57 from "../pictures/Gallery/pic57_tts_soldaten.JPG";
import pic58 from "../pictures/Gallery/pic58_tts_tanz.JPG";
import pic59 from "../pictures/Gallery/pic59_tts_team_part1.JPG";
import pic60 from "../pictures/Gallery/pic60_tts_team_part2.JPG";
import pic61 from "../pictures/Gallery/pic61_tts_backstage.JPG";
import pic62 from "../pictures/Gallery/pic62_tts_favorite1.JPG";
import pic63 from "../pictures/Gallery/pic63_tts_favorite2.JPG";
import pic64 from "../pictures/Gallery/pic64_tts_soldaten.JPG";
import pic65 from "../pictures/Gallery/pic65_tts_speer.JPG";
import pic100 from "../pictures/Gallery/pic100_hp_charly.jpg";
import pic101 from "../pictures/Gallery/pic103_hp_live23.jpg";
import pic102 from "../pictures/Gallery/pic102_hp_live25.jpg";
import pic103 from "../pictures/Gallery/pic103_hp_hp2.jpg";
import pic104 from "../pictures/Gallery/pic104_hp_dieter.jpg";
import pic111 from "../pictures/Gallery/pic111_ce_bbr.jpg";
import pic112 from "../pictures/Gallery/pic112_ce_drums3_big.jpg";
import pic113 from "../pictures/Gallery/pic113_ce_live1_big.jpg";
import pic114 from "../pictures/Gallery/pic114_ce_fds.jpg";
import pic115 from "../pictures/Gallery/pic115_ce_roet1.jpg";
import pic116 from "../pictures/Gallery/pic116_ce_roet2.jpg";
import pic117 from "../pictures/Gallery/pic117_ce_stone.jpg";
import pic118 from "../pictures/Gallery/pic118_ce_schenkenzell.jpg";
import pic120 from "../pictures/Gallery/pic120_fh_cd.jpg";
import pic121 from "../pictures/Gallery/pic121_fh_band_big.jpg";
import pic122 from "../pictures/Gallery/pic122_fh_presse_big.jpg";
import pic130 from "../pictures/Gallery/pic130_uc_1.jpg";
import pic131 from "../pictures/Gallery/pic131_uc_2.jpg";
import pic150 from "../pictures/Gallery/pic150_ls_zuhause.jpg";
import pic151 from "../pictures/Gallery/pic151_mh_mukis.jpg";
import pic152 from "../pictures/Gallery/pic152_von_guten_maechten.jpg";
import pic153 from "../pictures/home/little_drummer_boy.jpg";
import pic154 from "../pictures/Gallery/pic154_taeglich_holz_machen.jpg";
import pic321 from "../pictures/Gallery/pic321_noah_affe.JPG";
import pic322 from "../pictures/Gallery/pic322_noah_arche.JPG";
import pic323 from "../pictures/Gallery/pic323_noah_cool.JPG";
import pic324 from "../pictures/Gallery/pic324_noah_regie.JPG";
import pic325 from "../pictures/Gallery/pic325_noah_regie2.JPG";
import pic326 from "../pictures/Gallery/pic326_noah_tagesschau.JPG";
import pic327 from "../pictures/Gallery/pic327_noah_tanz.JPG";
import pic328 from "../pictures/Gallery/pic328_noah_technik.JPG";

function Gallery() {
  const [band, setBand] = useState(false);
  const [project, setProject] = useState(false);
  const [mukis, setMukis] = useState(false);
  const [other, setOther] = useState(false);

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper ">
        <div className="content py-2 text-center">
          <h1>Gallery</h1>

          <img className="gallery-first-picture mb-2" src={pic151} alt="" />
          <div className="overlay">
            <div>meine Bildersammlung</div>
          </div>

          <h4
            className="gallery-expand-buttons"
            onClick={() => setProject(!project)}
          >
            {project ? "> " : ""}Projects
          </h4>
          {project ? (
            <React.Fragment>
              <ul className="image-gallery">
                <li>
                  <img src={pic40} alt="" />
                  <div className="overlay">
                    <div>Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_1} alt="" />
                  <div className="overlay">
                    <div>Ute-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_2} alt="" />
                  <div className="overlay">
                    <div>Intro-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_3} alt="" />
                  <div className="overlay">
                    <div>Tina-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_4} alt="" />
                  <div className="overlay">
                    <div>Beate-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_5} alt="" />
                  <div className="overlay">
                    <div>Markus-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_7} alt="" />
                  <div className="overlay">
                    <div>Band-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_8} alt="" />
                  <div className="overlay">
                    <div>Stefan-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_9} alt="" />
                  <div className="overlay">
                    <div>Maggy-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_10} alt="" />
                  <div className="overlay">
                    <div>Manu und Beate-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_11} alt="" />
                  <div className="overlay">
                    <div>Iris-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_12} alt="" />
                  <div className="overlay">
                    <div>Dora-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_13} alt="" />
                  <div className="overlay">
                    <div>Nobby-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_14} alt="" />
                  <div className="overlay">
                    <div>Lissy-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_15} alt="" />
                  <div className="overlay">
                    <div>Manu-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_16} alt="" />
                  <div className="overlay">
                    <div>Nobby-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_17} alt="" />
                  <div className="overlay">
                    <div>Drums-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_18} alt="" />
                  <div className="overlay">
                    <div>Martin-Liederschatzprojekt, 2019/20</div>
                  </div>
                </li>
                <li>
                  <img src={pic_19} alt="" />
                  <div className="overlay">
                    <div>
                      Herz und Herz vereint zusammen-Liederschatzprojekt,
                      2019/20
                    </div>
                  </div>
                </li>

                <li>
                  <img src={pic1} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic2} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic3} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic4} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic5} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic6} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic7} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic8} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic9} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic10} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic11} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic12} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic13} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic_20} alt="" />
                  <div className="overlay">
                    <span>Bilder der Passion, 2008</span>
                  </div>
                </li>
                <li>
                  <img src={pic50} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Banner in Baiersbronn, 2004</span>
                  </div>
                </li>
                <li>
                  <img src={pic51} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Batseba, 2004</span>
                  </div>
                </li>
                <li>
                  <img src={pic52} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Jonathan und David, 2004</span>
                  </div>
                </li>
                <li>
                  <img src={pic53} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Flyer, 2004</span>
                  </div>
                </li>
                <li>
                  <img src={pic54} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Saul, 2004</span>
                  </div>
                </li>
                <li>
                  <img src={pic64} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Soldaten, 2004</span>
                  </div>
                </li>
                <li>
                  <img src={pic65} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Speerwurf, 2004</span>
                  </div>
                </li>
                <li>
                  <img src={pic55} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Saul und Doeg, 2004</span>
                  </div>
                </li>
                <li>
                  <img src={pic56} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Simon, 2004</span>
                  </div>
                </li>

                <li>
                  <img src={pic58} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Musik, 2004</span>
                  </div>
                </li>
                <li>
                  <img src={pic59} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Team Part a, 2004</span>
                  </div>
                </li>
                <li>
                  <img src={pic60} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Team Part b, 2004</span>
                  </div>
                </li>

                <li>
                  <img src={pic61} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Backstage, 2004</span>
                  </div>
                </li>
                <li>
                  <img src={pic63} alt="" />
                  <div className="overlay">
                    <span>Touch the sky, Finale, 2004</span>
                  </div>
                </li>
              </ul>
              <h4
                className="gallery-expand-buttons"
                onClick={() => setProject(!project)}
              >
                ^
              </h4>
            </React.Fragment>
          ) : (
            ""
          )}

          <h4
            className="gallery-expand-buttons"
            onClick={() => setMukis(!mukis)}
          >
            {mukis ? "> " : ""}Mukis
          </h4>
          {mukis ? (
            <React.Fragment>
              <ul className="image-gallery">
                <li>
                  <img src={pic37} alt="" />
                  <div className="overlay">
                    <div>Mukis, 2005</div>
                  </div>
                </li>
                <li>
                  <img src={pic36} alt="" />
                  <div className="overlay">
                    <div>Mukis, 2005</div>
                  </div>
                </li>
                <li>
                  <img src={pic38} alt="" />
                  <div className="overlay">
                    <div>Mukis, 2005</div>
                  </div>
                </li>
                <li>
                  <img src={pic14} alt="" />
                  <div className="overlay">
                    <div>Musical-Der barmherzige Vater, Achterbahn, 2006</div>
                  </div>
                </li>
                <li>
                  <img src={pic15} alt="" />
                  <div className="overlay">
                    <span>
                      Musical-Der barmherzige Vater, Geisterbahn, 2006
                    </span>
                  </div>
                </li>
                <li>
                  <img src={pic16} alt="" />
                  <div className="overlay">
                    <span>Musical-Der barmherzige Vater, Hunde, 2006</span>
                  </div>
                </li>
                <li>
                  <img src={pic17} alt="" />
                  <div className="overlay">
                    <span>Musical-Der barmherzige Vater, Josua, 2006</span>
                  </div>
                </li>
                <li>
                  <img src={pic18} alt="" />
                  <div className="overlay">
                    <span>Musical-Der barmherzige Vater, Josua, 2006</span>
                  </div>
                </li>
                <li>
                  <img src={pic19} alt="" />
                  <div className="overlay">
                    <span>Musical-Der barmherzige Vater, Kids1, 2006</span>
                  </div>
                </li>
                <li>
                  <img src={pic20} alt="" />
                  <div className="overlay">
                    <span>Musical-Der barmherzige Vater, Kids2, 2006</span>
                  </div>
                </li>
                <li>
                  <img src={pic21} alt="" />
                  <div className="overlay">
                    <span>Musical-Der barmherzige Vater, Wirtshaus, 2006</span>
                  </div>
                </li>
                <li>
                  <img src={pic22} alt="" />
                  <div className="overlay">
                    <span>
                      Musical-Der barmherzige Vater, Werbetafel in Baiersbronn,
                      2006
                    </span>
                  </div>
                </li>
                <li>
                  <img src={pic23} alt="" />
                  <div className="overlay">
                    <span>Musical-Der barmherzige Vater, Abschluss, 2006</span>
                  </div>
                </li>
                <li>
                  <img src={pic24} alt="" />
                  <div className="overlay">
                    <span>Musical-Friede auf Erden, Wirt, 2006</span>
                  </div>
                </li>
                <li>
                  <img src={pic25} alt="" />
                  <div className="overlay">
                    <span>
                      Musical-Friede auf Erden, Maria und Joseph, 2006
                    </span>
                  </div>
                </li>
                <li>
                  <img src={pic26} alt="" />
                  <div className="overlay">
                    <span>Musical-Friede auf Erden, Mukis, 2006</span>
                  </div>
                </li>
                <li>
                  <img src={pic322} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic321} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, Intro,2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic323} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic327} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic27} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, Flut, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic28} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, auf Deck, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic29} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, Gott malt mit bunten Farben, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic30} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, Mäuse, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic31} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, Tanz mit Regenschirme, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic324} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, Regie, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic325} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, Regie2, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic326} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, Tagesschau, 2009</span>
                  </div>
                </li>

                <li>
                  <img src={pic32} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, Wetterstation, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic328} alt="" />
                  <div className="overlay">
                    <span>Musical-Noah, Technik, 2009</span>
                  </div>
                </li>
                <li>
                  <img src={pic33} alt="" />
                  <div className="overlay">
                    <span>Mukis 2005-Willkommen im Vaterhaus</span>
                  </div>
                </li>
                <li>
                  <img src={pic34} alt="" />
                  <div className="overlay">
                    <span>Mukis 2005-Willkommen im Vaterhaus</span>
                  </div>
                </li>
                <li>
                  <img src={pic35} alt="" />
                  <div className="overlay">
                    <span>Mukis 2005-Willkommen im Vaterhaus</span>
                  </div>
                </li>
              </ul>
              <h4
                className="gallery-expand-buttons"
                onClick={() => setMukis(!mukis)}
              >
                ^
              </h4>
            </React.Fragment>
          ) : (
            ""
          )}

          <h4 className="gallery-expand-buttons" onClick={() => setBand(!band)}>
            {band ? "> " : ""}Bands
          </h4>
          {band ? (
            <React.Fragment>
              <ul className="image-gallery">
                <li>
                  <img src={pic101} alt="" />
                  <div className="overlay">
                    <span>HP's Hauskapelle, Buhlbachbeleuchtung, 2023</span>
                  </div>
                </li>
                <li>
                  <img src={pic102} alt="" />
                  <div className="overlay">
                    <span>Lady Blue, Betzweiler, 2025</span>
                  </div>
                </li>
                <li>
                  <img src={pic111} alt="" />
                  <div className="overlay">
                    <span>
                      Cats Eyes-fast Orginalbesetzung, Baiersbronn, 1993
                    </span>
                  </div>
                </li>
                <li>
                  <img src={pic112} alt="" />
                  <div className="overlay">
                    <div>Cats Eyes-Markus, JUZ-FDS, 1994</div>
                  </div>
                </li>
                <li>
                  <img src={pic113} alt="" />
                  <div className="overlay">
                    <span>Cats Eyes-live, 1995</span>
                  </div>
                </li>
                <li>
                  <img src={pic114} alt="" />
                  <div className="overlay">
                    <span>
                      Cats Eyes-Rockfestival, FDS, Paradies Bird, 1993
                    </span>
                  </div>
                </li>
                <li>
                  <img src={pic115} alt="" />
                  <div className="overlay">
                    <span>Cats Eyes-Röt, Sportfest, 2015</span>
                  </div>
                </li>
                <li>
                  <img src={pic116} alt="" />
                  <div className="overlay">
                    <span>Cats Eyes-Röt, Sportfest, 2015</span>
                  </div>
                </li>
                <li>
                  <img src={pic117} alt="" />
                  <div className="overlay">
                    <span>
                      Cats Eyes- gemaltes Bild von Josua zum 50sten für Nobby,
                      2017
                    </span>
                  </div>
                </li>
                <li>
                  <img src={pic118} alt="" />
                  <div className="overlay">
                    <span>Cats Eyes- Schenkenzell, 1999</span>
                  </div>
                </li>
                <li>
                  <img src={pic120} alt="" />
                  <div className="overlay">
                    <span>Frozen Heart- CD-Heart of stone, 1993</span>
                  </div>
                </li>
                <li>
                  <img src={pic121} alt="" />
                  <div className="overlay">
                    <span>Frozen Heart- Band, 1993</span>
                  </div>
                </li>
                <li>
                  <img src={pic122} alt="" />
                  <div className="overlay">
                    <span>Frozen Heart- Presse, 1993</span>
                  </div>
                </li>
                <li>
                  <img src={pic131} alt="" />
                  <div className="overlay">
                    <span>Undercover- erste Band, 1989-92</span>
                  </div>
                </li>
              </ul>
              <h4
                className="gallery-expand-buttons"
                onClick={() => setBand(!band)}
              >
                ^
              </h4>
            </React.Fragment>
          ) : (
            ""
          )}

          <h4
            className="gallery-expand-buttons"
            onClick={() => setOther(!other)}
          >
            {other ? "> " : ""}Other
          </h4>
          {other ? (
            <React.Fragment>
              <ul className="image-gallery">
                <li>
                  <img src={pic154} alt="" />
                  <div className="overlay">
                    <div>mein Übungsplatz zuhause</div>
                  </div>
                </li>
                <li>
                  <img src={pic150} alt="" />
                  <div className="overlay">
                    <div>Vorbereitung Liederschatzprojekt, 2019</div>
                  </div>
                </li>

                <li>
                  <img src={pic152} alt="" />
                  <div className="overlay">
                    <span>
                      Videochat für Aufzeichnung - Von guten Mächten, Ostern
                      2020
                    </span>
                  </div>
                </li>
                <li>
                  <img src={pic153} alt="" />
                  <div className="overlay">
                    <span>Liederschatzprojekt, Knittlingen 2019</span>
                  </div>
                </li>
              </ul>{" "}
              <h4
                className="gallery-expand-buttons"
                onClick={() => setOther(!other)}
              >
                ^
              </h4>
            </React.Fragment>
          ) : (
            ""
          )}
        </div>
        <div
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            fontSize: "30px",
            bottom: "40px",
            right: "40px",

            color: "#fff",
            textAlign: "center",
          }}
          className="up-arrow"
        >
          ^
        </div>
      </div>
    </div>
  );
}

export default Gallery;
