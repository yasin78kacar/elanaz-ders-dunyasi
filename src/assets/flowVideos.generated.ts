/* eslint-disable */
// Flow video varlıkları — assets/videos/

export const FLOW_VIDEOS = {
  'acilis-merhaba': require('../../assets/videos/Girl_waves_and_says_Merhaba_202606121441.mp4'),
  'anne-panel': require('../../assets/videos/Mother_figure_smiles_at_tablet_202606121441.mp4'),
  'dogru-kutlama': require('../../assets/videos/Girl_claps_hands_happily_202606121441.mp4'),
  'yanlis-teselli': require('../../assets/videos/Girl_shakes_head_says__Olmadı__202606121441.mp4'),
  'sasirtma-uyari': require('../../assets/videos/Girl_winks_and_whispers_question_202606121441.mp4'),
  'konu-sayi-dogrusu': require('../../assets/videos/Girl_points_to_number_line_202606121441.mp4'),
  'konu-onluk-blok': require('../../assets/videos/Girl_counts_blocks_57_202606121441.mp4'),
  'konu-onluk-blok-saying': require('../../assets/videos/Girl_points_to_blocks_saying_202606121441.mp4'),
  'konu-sayi-okuma': require('../../assets/videos/Girl_shows_numbers_in_Turkish_202606121441.mp4'),
  'konu-ritmik-sayma': require('../../assets/videos/Girl_jumping_on_number_line_202606121441.mp4'),
  'konu-geometrik-cisimler': require('../../assets/videos/Girl_picks_up_objects_glowing_202606121441.mp4'),
  'konu-tahmin-etme': require('../../assets/videos/Girl_counts_marbles_in_jar_202606121441.mp4'),
  'elanaz-tanitim': require('../../assets/videos/Turkish_girl_character_Elanaz_st…_202606121046.mp4'),
  'dort-kiz': require('../../assets/videos/Four_girls_in_school_uniforms_202606121046.mp4'),
} as const;

export type FlowVideoKey = keyof typeof FLOW_VIDEOS;
