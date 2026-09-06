import {
  carDetails,
  type CarDetailFields,
} from "@/data/car-details";

export type BodyType =
  | "SUVW"
  | "Compacto"
  | "Sedanes"
  | "Deportivos"
  | "Pick-Up"
  | "Camiones y buses";

export type CarBase = {
  slug: string;
  name: string;
  bodyType: BodyType;
  image: string;
  selectable: boolean;
};

export type Car = CarBase & Partial<CarDetailFields>;

/**
 * Lineup de volkswagen.com.ar/es/modelos.html (mercado Argentina).
 * Las imágenes apuntan al CDN público de la página de modelos (referencia visual).
 * Para producción comercial, reemplazar por assets del Brand Portal alojados en /public/cars.
 */
export const cars: CarBase[] = [
  {
    slug: "tera",
    name: "Tera",
    bodyType: "SUVW",
    image:
      "https://media.vw.mediaservice.avp.tech/media/fast/v3_x2TW2hcVRSG9_n2OXtEbWNtmokxiSHOjLlNZnIyyWSEqfTii2IJ2saq2GFnzp5LnFtPzkxSqlLrpYpU2peWWi-IilgqPkmLghb00StFRERQELzVCxZRrIonLhasC-tf_A__f_on4bR9wT1bT1-M_qku2_kVQqy2hJDPCCdo-4tNSwgxz-XVui6b1FLLlKODnZWk7rRSgfF1yk27s8m1LumWSsliseN2iUgIEVKIyIGwnFsbxPr1bb_W0r6uT3pmsV3eMOLNZRZLrjbamysu5lwzlzWlqXRxOjvnTmuTzXrZTEnnTOnqEH1OSF2riS5vtt4saXe65DcbQaso1nmlqYw3nW7pSpjCXiMjumKBXy2XjV-o-4VKa4p0DvkeVpX4a4wcgiI8zuhh-BIuML7CRIrJH0l9j_0m9ltkNuJM4kyTOYFTwHkW9SJzTxFJIuKQJvorvdfT5yI_wb6V_oOIcayLoFBjqONE7kXMoKIMvczQO8SWEPfD-8jdjD_HzB04n6M2oCZQe1D76d6JdZToINEk8knsm3G-wPkd9RjqLLGPie8Di7Vow15Gd8EpnK1klsg8QOYUM6s4HzLzUkgB1Y2Ko26BXQx9gFrFOoL8FHkJ-Qf2INedRUVQfagmQ7-hHkS9Smw3McPIZ4zehCwijyN_IdWN7WLfiL0d51tmf2D2EmoH6i4ib9A7gS2xj-AkGTjA4Ec4_zLWw_g3yEP0_80VL2D9DFehXmf4XWIjiCuJP0L8DIkm1ndYf2GfJHWMzDCqiDJkH0UdJHISq4x1hk2b2bQKvfQIelyim5HXIPvpW4c8Qd8r2Bb2MPbtXHuegQWcPI7LwBMMHmX0BsbOIw8jL2APkcphP08mh7qbSAzna9jP-MNkH4K3kXtwNM4_xJuh4J42jU41FFndNIL8wp2FbdsW3MLWZs1LrFS9oJKfyrnpRMVUy5Ugn5tNJ3StVdH5wG-bRFHXQzfktyzMu9sLWwpuIZ12E7oR-ieoNhvL-R1roES96ZmabzrV5XCZv21-KlGuNRd1zdcr95l9y2Zv2zSKJu8m6ibQng50x_j_n7obZfj6P3txLb-3AwAA.webp?width=864",
    selectable: true,
  },
  {
    slug: "polo",
    name: "Polo",
    bodyType: "Compacto",
    image:
      "https://media.vw.mediaservice.avp.tech/media/fast/v3_x2T7WtbdRTHf_dz7_1FRFfn2maLTY1bGtvV5uHmJmnEDNbNN05HQVdXZYab5JeHLcnNbm_SaVWmY8wHJh2IYxO2FzJkMvCVKBXUP2A-gIovZKAgqPg0nENxiN563pzvOXy_h3Pgey79Isy-J3h87tK18F_ypke-QYgjPSH0l4Tp972Kqwkh5rm51XEaKnWwpxrh-GB5xhn0Uj237aastJWfWUeDluf3l2asRmWmWh1YQyIUCIUuROhokD5aL8SGDX2v3XM8p5OsqUq_sXGynq84mWJ1tlCr1LK1qp1RKlPPFQuFol2sO_W0XanaeVXJ3R6o14TutNtiqJbvuHXHytY9t-v3qiJUeSqbrWXTwlhfRgzFfa_VaCiv3PHKzV4Ga5RkFO0Q2nEmLjJ5DF5g6iRcgZ-ZXib5E6kfMdYw3sfehJnEzGKfwVwkdx_yLLOvEMohtkGa8FU2byNioX-BsYex5xHTaNdAYqeQpxEjhBQiiQwTu0DsQ8QBxNNwGX0_0-fIPYzciLwHeQC5wvA-tFOExwnPoL-McT_m15jXkavINeKfMXEENIKYvAqHmVqEtzDnsA9iP4Md4E_IvYH5L3IYOYF8APYRu4y2in6DyJcY49z5HjKEjCBdYr8jn0VeJL6fuGLyK_Qq-mn0X0kNk9qCcS_GbswE5vfIWfI3kHuRi4iANoqhY6wSfZDoUcY_JWazfZTp79BPMPYn2m9wG_Jt7nqVeBRxCxMn0M6hXUH7Ae1vjNdJvYa9FVlBKgrHKfyB1kB7l5EdjATHbmbkY0YtwjvQt6CPEbkV_Qz6BSLXMbZyx5sYK0QXMEuYFtEXGT_F1N1s_xz9JMl3MGKkihjnsYvIxwjFMb-FFaaPUXgOPkB_AtPB_IcJNzDWWdUN3Ot2O6rrlxYeLe_atWCV59x2LbHcqvnNUqZopRNN1Wo0_VIxn0447V7TKfleXyWqTkd5Tmnnwry1u7yzbJXTaSvhdINv8Vtud6m0d12U6Lg11fbUoLUUNEsPzWcSjbZbcdqes3xIPbmkDvdVt6pKVqKjfKfm-M5Aef9TrU16MPo_IWPERKUDAAA.webp?width=864",
    selectable: true,
  },
  {
    slug: "virtus",
    name: "Virtus",
    bodyType: "Sedanes",
    image:
      "https://media.vw.mediaservice.avp.tech/media/fast/v3_x2TX2hbdRTHf_dz7_1FZLbsT5tamxhnmrWLaW5_uWkbIYN1U1Bx9sFVp2i4yb1NsyW52e1N2jknc2M6lbE_oGWC82H4MB3oiygT_7zsafNJQUQEBUFhykTRDYbireflfM_h-z3nPHzPxd-E2Q0ET89e_DN-U972-A8IsdIRQn9VmGE3qPqaEGKO2xstp-7l93a8ejzdW845vU6-4zf9vLLUVG4N9RpB2F3KqXo1V6v1VL-IRUKhCxE7HKUv1grR19cNmh0ncFoTrlft1tePqUKx6qmSa5ccZVlTRXtmsuQq11WqWCgULCdCC1atOLkhUl8SutNsin53quUvOKqwEPjtsFMTsepz9nT7gCWMtWNEfzoMGvW6F1RaQWWxM4l1itxDaPvQjjF6gbGjcJzxE_A9_Ep2mYlr5L_FuITxCfZGzAnMAvZZ7Pcx30KeJ5YkliMWgkX8d4buZVihf43xCCNHEFm0v0Fi55GriASxBmIGOUjqA1Kfk34J8TxcRX-S7DmKjyHXI-9DPoM8yKbdaKeJJ4nn0F_DeADzO8y_kGeQn5K-xugKY-tYiy7sZ3wPvIs5i70X-xB2hL-keD7ajxxAjiIfht2krqKdYvgb9BsYSe7-GBlDDiF9Un8gX0BeQDxI2mMs4tTQV9Gvk99E_k6M-zF2YmYwf0bOMHULuQu5BxHRBjF0jJOYORKHSV7B_Jetg2R_Qj_OyA2067CBexTyJukEYh2jL6OdY8sbaL-g3cJYJX8SezOyhvSYPoY8glZH-4iBbQyswBADlxlUxLehx9FHGL4D_Sz6Oxgaxmbueg_jEIl5zDKmIvEKydOMb2HrV-gnmPgQI0W-hPE2dgn5FDOvY_4IB8keZfpF-Az9WZJ9mP8w6kfGetNrR-712y2vHZbnn6js2DGvKrN-080sN9xwsTxZUlZm0WvUF8NyacrKOM3OolMOg66XqTktL3DK2-fn1M7K9oqqWJbKOO3oW8KG314q71oTZVq-6zUDr9dYiprlR-cmM_WmX3WagbO8zzuw5O3veu2aV1aZlhc6rhM6PS_4n6o26tHo_wCn2Ih0pQMAAA.webp?width=864",
    selectable: true,
  },
  {
    slug: "nivus",
    name: "Nivus",
    bodyType: "SUVW",
    image:
      "https://media.vw.mediaservice.avp.tech/media/fast/v3_x2T7WtbdRTHf_nce38RtSt1a9PNtoatielimpub26RRM1g33yjOCK7qROPNvb8mcUludpukG0Wd-LS9mNpXoz5sgi9kMlAE2VDY_AOGCAoyRFAQBJ9xyMSpeLvDgfPA93vOefE9Z38RRj8QPLZw9krsL3nDQ98ixOGuENpLwuj1g5ofEUJUuLHZduoq-1RX1WPxwUrGGXSzneagv5y1TKuYuZ5mCsVaxnUH1rCIhiShCRE9GoZPNwqxaVM_aHWdwGnPeqrWr4-kTM81S_P2XN4u5mu2l1NeKZ-bc1Vuziss5b0lZVp2vuRZt4Ts80JzWi0x7BXa_pJj5ZcCv9PrumLIbVj2wbwZDg5d6BvXiOHpXtCs11VQbQfVRjeHuU7mKokikWMkzpDywYVjzJyAb-Bn0ivM_kT2MvrH6J9gb8aYxchjr2NUMd5CvsP8K0QzRI-ASex3xnegfYl-HxPPItJEroDEziJTyJOIUaItxN3IGPEPiF9EPEliBC6hPUL6FMbbGJeRI8g7kI8jV9myn8gasSliGfR7ML7G-BO5hrzI9OckDrNhfTgE72EsYD-NHSafhWuRo8gE8l7YT_wSkdfQrqFdRZ_itvPIKHIc6RP_A_kM8gzTB5hWpL5ipoLmop1E-5XsFrJb0e9E34vxA4UfKVxD7kM-iggxY-gaRobJoxgfYvzHzjHS36O9zMQ_RH7jpguk7kK-z47jTKcQN5N4gcQ5kj6Rv9HfIPsq9naki1QUX2ReJ1Inco7RXTAOFcYsYruIPUDsTbStaBNsG0JbZ9u76KBv59Yc-oPoq0wuYpQxLCaPM7XGzO3s_ALtBLMfocfRT2OXkAeIJjC-g1XSz1N8Di6gPYHhEB_C-JeEHwrrddUZNEMxtVWnV158uLpnz6JVXfBbXnKl6fUa5VzJMpMN1aw3euVSwUw6rW7DKfeCvkq6TlsFTnn3YsXaW91dtaqmaSWdTvgpvabfWS7v2yAl276nWoEaNJfDZvn-Si5Zb_k1pxU4KwfVkWV1qK86ripbybbqOZ7TcwYquA61Nmvh6P8Bk9PCVqEDAAA.webp?width=864",
    selectable: true,
  },
  {
    slug: "t-cross",
    name: "T-Cross",
    bodyType: "SUVW",
    image:
      "https://media.vw.mediaservice.avp.tech/media/fast/v3_yWTXWhbZRjH3_N7z3kjalfnuqZutaszie1qmuQkS1Mhk3UbiOLWC1cn4sKbkzdpbL52epKuuOHwA3dh1bmLMT_mhRcymSjiqDhwgrcqgjqYIHglA5WJQxSn4qnCA8__-fj_eS7-z7mfhdP1BY_OnLsW_UPd8ND3CHG4I4Q8KZyg65fblhBilhvrTV0zqcc7phaN9ZaSutdJBZ7fXlxMuWk3n_wfN3TSrZmk5_XcfhEJiUIKETkWpk_WCrFuXddvdLSvm5MVU-7W1o-5ulrW02kvW82YTN4r5DNVt-J6GVNwC-lMOZwUqoUpb-rWkH1BSN1oiP5Kvtmuajdb9dutoOOJvnI1m1vIuh3thSHstYNEfyzw67Wa8UtNvzTfyWB_w2Qf8Sms48TPMnYAPDjO-Ap8Bz8xscTkj6QuY3-EfYHcBpxJnCy50-Q-xXkd9SaFF4gkiSxDmugvDN2J_Br7AYafxLkPMYF1DSLkUqgx1EnERsQ0Ksroe4xeJLaMOAKfIw8wcYbt-3Auo9aTfwd1EHWEgf1YJ4iOEE1i78H5Fuc31MvcUSX2JfHDYEEXDsHbODPkjpILwRcoUAOoOOp-2M_oZ6gF1BLWS8hLyOvI37FH2PIhKoIaQrUZ_RV1lthjxAxjlxi_F-khTyGvkhrAzmLfg72b7VdQBfLXUXtRjzC1SuQ8chBb4iS5_RjO-zj_sG0Q2UE-x_Bf3PQq1lW4BfUu6gdiY4ibiT9DfJXE3VhXsP7EPkXqRXJbUR7KMPUs6imsGtYqG3fAEIP9DLpQJ7qD6D6iryFvQw6zqQ95mk1vYYO9lc0ZNj-PPYd9FPsDnCKOy8gJxu9i21fIFSbPY49iv0FumkiMLRfhCSaeho-RB7FXcDTO38TbocNeMa1ePXRV07SC4tzDpV275tzSTLtRSSzVK8F8MTPtphPzpl6bD4rT-XRCNzrzuhj4XZPwdNP4urhzbtbdXdpZckvptJvQrfBtgnq7tVjcu0ZKNNsV0_BNr74YNosPzmYStUa7rBu-Xlowy4vmUNe0PFN0E00T6IoOdM_4_626G2Qo_S9uu6ZqrgMAAA.webp?width=864",
    selectable: true,
  },
  {
    slug: "taos",
    name: "Taos",
    bodyType: "SUVW",
    image:
      "https://media.vw.mediaservice.avp.tech/media/fast/v3_02TXWgcZRSGv3nmm0nxJzEmJLHWZBM3m6TJJpvJZpNV9iJptClaSSHGgtDtl9lvN2tmfzKZ3WgsGkGwNykWb6xgtTeaQMULpYqFxosioiKIoL0pKPSqrSiIP1gLTrwqHDjnPZz38HJ4z_lfhFXzBc9On_-9_W97z_xPCPF8VQjzC2EFNX-xYggh5rirWFIFPfJcVRfaO-trcVWvjgSqsjriJJxUfLeKO4VS3HXrTpNoCCnCFKJhI0yf7wLR2FjzvaryVWk4pxdrheb-STXhpBbzk-M6nx_PpfN6Mp9cnHRzynUmku6YTicm3YTKq_tD9mVhKs8TTblUqZJXzljer5SDqivudT0n6a071VU_DCF3xYimaOAXCwXtZ0t-dqnq4PgMVTCWMU7Su01_CVw4ycAmXIWbDK4x9ABDPQzfQF5Afoa8SLIFaxhrjOQZrCzW29jnaOikoR_RCwnaf2PvJeQT7HsZawZrFuNPaGDwIHYf9huI-xCjRJqx24hsEdlBZBHr8A3mUczjjB_BuoLdTOoD7GPY67TOY5ymfQb5GNYf2KewLxC9AQbUYYWBEyQ9kttY32IL7FbsbuxZOEq3wHgd8xbmX8hOrKt0fUrXNaybRNLYHdgV7BW6Qz3bRI8T1fT_wMAMg19hvsjwZUZakWPIR5GhgC2sPsZ_JnWd1C3spxGajjjmFtLEivPQBp1fs7-NwWuYr7HvX4xfoYXG09gf8vBFouGh7qH3VYyzxHbo-xHjH-SbyHdJ9mC72JqJ24gpjAKt32F8AnugA47Q9ggUMdsxH8RcxjzD3veRAtmDfBw5h3SRVeQGVgbLofMU3Y0M9LH_e8xNzHOY15ERRtLId0im6doh8hGcgCuY81gvMfEKvAeXMI8hN7EU1pdYt-ktY3ws7o5OHZ4-9OShg7Pzo3cC504wFlrzLV2uF0M7lnQ5yCw8kz1wYMHJTle8XGytmAuWMqNpJxFb0sXCUpBJpxIx5VWXVCbwazrmqpL2VWZqYc6ZyU5lnWwi4cRUOfy0oFgpr2ae2iXFSpWc9nxdL66GzczhOSdW8CqLyvPV2rJ-YVWv1HTZ1RknVtKByqlA1bX__6jTYoar_wMVuUgN4QMAAA.webp?width=864",
    selectable: true,
  },
  {
    slug: "vento",
    name: "Vento",
    bodyType: "Deportivos",
    image:
      "https://media.vw.mediaservice.avp.tech/media/fast/v3_02TX2gcZRTFv_nNN9-KQtOYNomxTZp2s0kbNzs7u9nNKqMkjaZBW6LGaBVcZ3cnm032n5PZ3dqKlCLWUgLtW1qoWJDa0qIIBUWkSin4oD6IoL7UP1CsiAVBUakKTvrUp3vP5Z7DuXDuhRvCaHiC5yYu_N71t7pj9geE2FcXQr8sDL_h5WqaEGKGO0sVp-jGFutusWtLsxV1mvXYouv7TswyrVT0VhuNp8ej-XzTahOhgCR0IUIHg_LJGhDr1jW8ct3xnMpIwc01iu1DTiqfipvJXCLu5p3C2FghXUjnMmZqzDEt17Uy6YxlJpxC-u6AfUXoTrks2gqpSm3esRLzXq3q1_MilGuMZhr7TSHXfIi2sO-VikXXy1a87EI9jnWSqIe2hPY62ipDB6AAR9i-AlfhV4Zb3DfAyHVi3yE_xFyP_IhkB8YIRoLkCYw5jFOotwhtZuwMYhuYdP1GzyXko2w6hDyPMYmxC-1PCDE8hVolNEfoCNo7qE6UjZoi3EK04HP0Z9BfYPRxVDupd1HPo_ajHYdr6EeRD2P8gTpG_5OE34MmnCd5jtEWxhcogdpI6jXUNDyFWqJfoB2j5zI936D_hezFuErfB_Rdw7iB6kbVUB797ahzhPcSdhn6mu2TDH-GfoCRK8gOYhuQCaSNnESexRhk9EdUktQ_qD2IPN0x9LNIHSPK5oP0XmdHJ8OB4cNs-pfBnyDQD275nvAQ4YcYeBXtDQYPo_2MdhO5inyT5FZUHjVP-iZakQ1for3Pxgehm871dJqwSNcD6F3o93LP_ehL6CfoeRspkFuRjyCfQOaRdeQryIsYNoZF71EG9sIhdnyFvoJ-Gv0X5BZiGeQpkmOoZ-n7GDUML8O36LOoEpyBS-hZ5AqGg_Epxn9o-9AuirvC47snph-bnto1G78dWLeDRBDKk261WQqCWHGrvj33dHbnzjkrO1ErFyKtUsFfsONBgCMLbqm44NuZlBlxyvUFx_a9hhvJOxXXc-zxuRlrMjuetbKmaUWcavBlfqlWXbb3rJEilVrBLXtus7QcDO3dM_FIsVzLOWXPaS25Ly27Lzbcat61rUjF9Z2C4ztN17u1anXogfT_M9fpWN0DAAA.webp?width=864",
    selectable: true,
  },
  {
    slug: "saveiro",
    name: "Saveiro",
    bodyType: "Pick-Up",
    image:
      "https://media.vw.mediaservice.avp.tech/media/fast/v3_y2TX2hbdRTHf_nk5kZlrptLm9rY9m4kl7Rpm9vb5CZxZqOb4kQ6CpsVGSzc5t6maZPceHuTdvNfUXwQKc75IJ0wfJBitawPzhcrY-xhgn9enOCLykQfBlKcijCYA2_Fw4HD9_D9Hs7D97uxLUItV3DqyMZf0TvyfSdvIsRSU4jgJRHyWu60ExBCTPJAtW5W7PRc065E4-3FYbPdTC-YbbvqOmld03PD_4PhbEsbLpfbeocI-0IRFCK87I-rO0Ds3t1ya03TNesjlj3dquxNWgW7kLWzo3lzzLAyMzO6NT2qzYzpuZxlaAXDMsq6npsu5B_y1ddF0KzVRIdl1J0ZUx-bcZ2G1yyLcLY1n_cympB2PhEdcc-tViq2W6q7pdnmKGO_M3SFwDyJdZLvQZmBgwysMHiY1CKp66R8Qjcjlxj5jfQtpM_QZKQttH1k_F4ls0n-JPnXyH-MUIlsEvmBru-J3qanQPA7Yu_wyCuEjiFSIJN6EqOK8RHyu4RPE64RfhVlD_JhlKvE5xAvwlekzhF6n-wzZE8h70UeQj5LpEK0j-gwwTeRnqD_A_rvogSRzyNfIyFItEDgV_I2yV9I_s3ACdhg8CyZBpk5MmtkPiS7RNYh9A3ZdeQARgtjFflpuh5G-Zr99yMvEThHzzV6fiIWpu9z-i8jh1FOoHyJ7KD8ifwy8jrxEsk7DEyS-pZ0BEknfYD0EMZNcruQnyO3TfhTYiC9Te8yfT-iHEJ5isEuUr8y1EvgD5IH4R5pn7_JgRjxFGIXgYsktlE_IXCLwD-k3yI3Tm6C3Ovk7iLGCVSI3CByj87H6DwD3XRepEvQpUOV6CGiE3Q_SnCVmEqsiHSM2BrSC0iXCen0vkFfndB59u9hIM7gDYIrjGwh9ZMpEPoZXiK1TPo4rMEVgqeRVgiZhL5AeRAlQsIhseWb74LdaPv-btTthlecerZ09OiUXjri1Cx1sWp5s8XRgq6ps3a1MusVC4ammrXmrFn03Jatls267ZrF8alJ_fHSeEkvaZqumg0_UV7VaSwUj--I1Lpj2TXXblcX_GVxYnJUrdScabPmmovz9pkF-_mW3SjbRV2t255pmZ6fN_c_qr4v6J_-Fy9RYHfJAwAA.webp?width=864",
    selectable: true,
  },
  {
    slug: "amarok",
    name: "Amarok",
    bodyType: "Pick-Up",
    image:
      "https://media.vw.mediaservice.avp.tech/media/fast/v3_yWT3WtbdRjHf_mcnFMnutouWbBZ27Qkx7w2yVnPSTKI0G3S7cLZC1vRwuIvyclLm7edJqkFxQ1FdtGp6IVTFBVFlI3eWFQURf-BiQrzQhG9kYHzBSZTkIGnCg88Lzzfh-_F57n8q1AHjmD16OUbgb-12x78ESEe6wmhrAm1P3DKXY8QYonbm21Zt9NrPbsemB1upuSwl5Zt6XTX00bGsFL_1ynjxEKqUhkao2LElQlFiJGzbvp8rxH79w-cVk86sj1XtcuD-lg0b8mCZRm5rGXVamY2U5MZ0z4spV3IWrZpmYV8rlLOmPlxV70jFNlqidGq1e7WpHG45nQ7_V5F3Cnr1WpeZnoN6Ybw7tkRo-G-06zXbafUdkqNXhZVkJojksNznsh7RM8R2yY-RVyH68xdIv093o_xfoL3U-YPMP8S6mnMAvmnETF8V_FH8VuQIfAHytcEX-TQk6gnEAkSFawamo5vl9A4oR1CXxDeQjxOfB-JSyRexVzEXMY8h_kc2l1oSXxlPB_gfxbvfag30LaZqRP-kugo0d-J3oQdlGnm38E8g-ZHOwnLBLYIXSH0FTOCiR8ITjD9EdoIWpvQL4RuMjNG-FGiV1EqJI-Q1kj78B7B-y6qjvkm6jWs37D-QTtF7gq564gKgbcICrzPM3mW6XuJjxE_SOJnlPMc-guP6-d9PFPMJJm9SDiJuAPP69zzDJ5reG4xP0suh1Yh9wa5Pxk5jm8M3xP43sbzIf7X8O9yMAdrBE6i3M3EOMrLBMMEFwlu432YySSTq0w9wtQ66gtEYsQixL9BuUC6QPop5vNYi2ir5Peh_kToW6ijLJN-ADOG1oTPUE7jvYAqUW8RuUjkOzy7Ljqv2J1h08WlbXf6xZWHSseOrRilo91WVd9sVvuNYrZgZPSG3aw3-sWCldFlyyWp2HcGtl6RbduRxYWVJeN4aaFklDIZQ5cd9xv6zW5no3hqT2S3u1W75djD5oY7LN6_lNXrrW5Zthy5uW5vbdhnBnanYhcNvW33ZVX25dB2_ls1Diju6X8BOR7Of4UDAAA.webp?width=864",
    selectable: true,
  },
  {
    slug: "tiguan",
    name: "Tiguan",
    bodyType: "SUVW",
    image:
      "https://media.vw.mediaservice.avp.tech/media/fast/v3_02TX2hbZRjGv_P7vvNlTFjZH-3UbXUzZp1dluQkTRclaLvObdKVKqWKf4inOV9OsuYk8fQknYpQFKvgv4m7cLsRh47BCoJO_HMxdzMQBUF2LYhO9EJlMLHiUDzVm1297_PyPC_PC8-7_Kuwu6Hg0bHlq_1_6jXT3yHE0Y4QclHYUTecbVtCiCnWNgLXN5kjHeP3p3oLabfXyUQNv-u2Mk7WKab_79PDI5PpydEH09Vqz-kTiVgqpBCJxbhcWAVi3bpu2Oy4oRvs8cxs118_WCzkq6ZWnXXcXM3Jm3zNyxovW_MKuWLVK5TMcG2vUxqujWyI1ctCus2m6POKQbvmOvla2G5FnapIhEGuEIw4Qq2aEX3JKGz4vgkrQVipd3I4r7PbI-ljzWG9jPUWg4_BS-x6Fb6FXxhaQP6D-hT1GXYSew92HnsCu4J9Av0eiW0k8iR6kKX_CrecR93PludQZ9n6M9YfkGDoAOpx9E70m4gNiBy6jL4PUUE8A18jH0Y-wfADaInejY7JT2O9AZdR-7F_R7-G_pDkDwyuhXk4i76R4hJ6AmbgONsF1jHkNeQKA58wcBn7CreV0JvRbXTI9vXoMyQNQ18ijyOvktmEuhs1jr2Lgof9I_ouitfQkwjD5jRKo45hp9m6yLav4BJDPyGX2LKC9RusoN_ndoFIcMeLWG-z8yOs-OS_UCdQpyjsQFfRi4h7sHw2fYP1MayBPDfthyPwAfJm5BzyJPJdlEDtQB1EPYLyUB1uvYh6HnUO-15sB17gzkvIV5DvIL8nUyKzRGEvA5-jx8GHZ5HT6AachvPYLvYX2H9jHcU6J25Ijh4eOzRx6MDB6dz1wLke5OMwnTStXiMOUGBaUXnmocq-fTNOZazd9FILDS-ql3MlJ5uqm4Zfj8qlYjblNjt1txyFXZOquoEJ3fLozJQzXhmtOJVs1km5rfhHoka7NV-eXBWlgrZnmqHpNebjYfnwVC7lN9uzbjN0F-bMU_Pmya5pVU3ZSQUmcj03cnsm_I_qbJTx6n8Bu8YhJ5sDAAA.webp?width=864",
    selectable: true,
  },
  {
    slug: "camiones-y-buses",
    name: "Camiones y buses",
    bodyType: "Camiones y buses",
    image:
      "https://assets.volkswagen.com/is/image/volkswagenag/Camiones?Zml0PWNyb3AsMSZmbXQ9d2VicC1hbHBoYSZxbHQ9Nzkmd2lkPTUwMCZiZmM9b2ZmJjkzMDk=",
    selectable: false,
  },
];

export const bodyTypes: BodyType[] = [
  "SUVW",
  "Compacto",
  "Sedanes",
  "Deportivos",
  "Pick-Up",
  "Camiones y buses",
];

export function getCarBySlug(slug: string): Car | undefined {
  const base = cars.find((car) => car.slug === slug);
  if (!base) return undefined;
  const detail = carDetails[slug];
  return detail ? { ...base, ...detail } : base;
}

export function getSelectableCars(): Car[] {
  return cars
    .filter((car) => car.selectable)
    .map((car) => getCarBySlug(car.slug)!);
}

export function getAllCarSlugs(): string[] {
  return cars.map((car) => car.slug);
}
