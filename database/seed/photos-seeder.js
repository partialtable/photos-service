const Photos = require('../models/photos');

const photos = [
  new Photos({
    photo_id: 12345,
    photo_path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.usatoday.com%2Fstory%2Fmoney%2F2020%2F03%2F11%2Fcoronavirus-restaurants-dining-in-food-safety-preparations%2F5025087002%2F&psig=AOvVaw3TtFR81jEeRnmCk__hV0Rn&ust=1601069389317000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKi-9cbeguwCFQAAAAAdAAAAABAD',
    photo_description: 'Awesome Restaurant atmosphere!!!',
    photo_category: 'Atmosphere',
    user_id: 243389,
    user_avatar_path: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fofad.org%2Ffiles%2Fdaily-photo%2Fnot-so-recent-and-random-portraits.jpg&imgrefurl=http%3A%2F%2Fofad.org%2Fphoto-of%2Fthe-moment%2Fnot-so-recent-and-random-portraits&tbnid=mLAcW2svbNiCHM&vet=12ahUKEwim8_um34LsAhUE0qwKHc8sASIQMygFegUIARCzAQ..i&docid=cx4EtbntE2PcJM&w=933&h=1400&q=random%20portrait&ved=2ahUKEwim8_um34LsAhUE0qwKHc8sASIQMygFegUIARCzAQ',
  }),
  new Photos({
    photo_id: 1234663,
    photo_path: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F9%252F2020%252F04%252F24%252Fppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg&imgrefurl=https%3A%2F%2Fwww.foodandwine.com%2Ffwpro%2Fthe-restaurants-you-love-the-most-wont-come-back&tbnid=PIIMBTvsFDAeWM&vet=12ahUKEwiBvteY4ILsAhUIOa0KHXuxBbYQMygDegUIARCAAQ..i&docid=fFFAXxbUzoLlWM&w=2000&h=1333&q=restaurants&ved=2ahUKEwiBvteY4ILsAhUIOa0KHXuxBbYQMygDegUIARCAAQ',
    photo_description: 'Elegant dining room',
    photo_category: 'Atmosphere',
    user_id: 2433209,
    user_avatar_path: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fofad.org%2Ffiles%2Fdaily-photo%2Frecent-and-random-portraits_8.jpg&imgrefurl=http%3A%2F%2Fofad.org%2Fphoto-of%2Fthe-moment%2Frecent-and-random-portraits&tbnid=STtTXd-KfN24MM&vet=12ahUKEwim8_um34LsAhUE0qwKHc8sASIQMygJegUIARC7AQ..i&docid=4HVJ-iS-cHX8RM&w=1100&h=733&q=random%20portrait&ved=2ahUKEwim8_um34LsAhUE0qwKHc8sASIQMygJegUIARC7AQ',
  }),
  new Photos({
    photo_id: 1292354,
    photo_path: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.sndimg.com%2Ffood%2Fimage%2Fupload%2Fq_80%2Cfl_progressive%2Ch_437%2Cw_1025%2Cc_fill%2Fv1%2Fimg%2Frecipes%2F15%2F47%2F15%2FiZlIL9OyRQaFz1Q95a68_BLT-pasta-salad-light-ww-03024.jpg&imgrefurl=https%3A%2F%2Fwww.food.com%2F&tbnid=byst2elr08V5XM&vet=12ahUKEwi5p-Or4ILsAhUJyKwKHTr7B2oQMygEegUIARDYAQ..i&docid=iTkETG6SfnmcnM&w=1025&h=437&q=food&ved=2ahUKEwi5p-Or4ILsAhUJyKwKHTr7B2oQMygEegUIARDYAQ',
    photo_description: 'Delicious pasta bowl',
    photo_category: 'Food',
    user_id: 1349,
    user_avatar_path: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F23900000%2FFelicia-Day-Random-Portrait-felicia-day-23983017-1070-1599.jpg&imgrefurl=https%3A%2F%2Fwww.fanpop.com%2Fclubs%2Ffelicia-day%2Fimages%2F23983017%2Ftitle%2Ffelicia-day-random-portrait-photo&tbnid=l7VB_s7-6xryrM&vet=12ahUKEwim8_um34LsAhUE0qwKHc8sASIQMygHegUIARC3AQ..i&docid=MgIkfwzgJAc_mM&w=1070&h=1599&q=random%20portrait&ved=2ahUKEwim8_um34LsAhUE0qwKHc8sASIQMygHegUIARC3AQ',
  }),
  new Photos({
    photo_id: 3298,
    photo_path: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-a.william-reed.com%2Fvar%2Fwrbm_gb_food_pharma%2Fstorage%2Fimages%2Fpublications%2Ffood-beverage-nutrition%2Ffoodnavigator.com%2Farticle%2F2020%2F04%2F22%2Fcoronavirus-and-obesity-doctors-take-aim-at-food-industry-over-poor-diets%2F10933380-3-eng-GB%2FCoronavirus-and-obesity-Doctors-take-aim-at-food-industry-over-poor-diets_wrbm_large.jpg&imgrefurl=https%3A%2F%2Fwww.foodnavigator.com%2FArticle%2F2020%2F04%2F22%2FCoronavirus-and-obesity-Doctors-take-aim-at-food-industry-over-poor-diets&tbnid=rotkJ0k6rKouPM&vet=12ahUKEwi5p-Or4ILsAhUJyKwKHTr7B2oQMygWegUIARCAAg..i&docid=9c3n1wmeS3RR8M&w=749&h=517&q=food&ved=2ahUKEwi5p-Or4ILsAhUJyKwKHTr7B2oQMygWegUIARCAAg',
    photo_description: 'greasy comfort food',
    photo_category: 'Food',
    user_id: 982354,
    user_avatar_path: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F56ccb96b1bbee0cce90d1ab9%2F1548273957971-9O4ZHOAKF8GPGQHMZFFI%2Fke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICHnXC1b9smDvYLPdL-DS7U1pkhCtl83kemXd5r3C5ngKMshLAGzx4R3EDFOm1kBS%2Fjungblut_santabarbara_photographer_03.jpg&imgrefurl=http%3A%2F%2Fwww.jonasjungblutphoto.com%2F&tbnid=6Iq2LqkShZZzIM&vet=12ahUKEwim8_um34LsAhUE0qwKHc8sASIQMyglegUIARD4AQ..i&docid=sNnnHxO-VOgRkM&w=800&h=800&q=random%20portrait&ved=2ahUKEwim8_um34LsAhUE0qwKHc8sASIQMyglegUIARD4AQ',
  }),
  new Photos({
    photo_id: 2643,
    photo_path: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpublic.oed.com%2Fwp-content%2Fuploads%2Fcoctails.jpg&imgrefurl=https%3A%2F%2Fpublic.oed.com%2Fblog%2Fthrough-a-glass-how-the-language-of-cocktails-shapes-english%2F&tbnid=RKdwE4PyuP8OuM&vet=12ahUKEwj-jtrj4ILsAhVKWK0KHVQ5A3gQMygHegUIARD2AQ..i&docid=7XBQDzDcWOrUSM&w=6123&h=4082&q=cocktails&ved=2ahUKEwj-jtrj4ILsAhVKWK0KHVQ5A3gQMygHegUIARD2AQ',
    photo_description: 'great cocktails',
    photo_category: 'Drink',
    user_id: 745332,
    user_avatar_path: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fportra.wpshower.com%2Fwp-content%2Fuploads%2F2014%2F03%2F936full-zach-galifianakis.jpg&imgrefurl=http%3A%2F%2Fportra.wpshower.com%2Fportraits%2F&tbnid=b7_xpruvY9lHbM&vet=12ahUKEwim8_um34LsAhUE0qwKHc8sASIQMygnegUIARD8AQ..i&docid=MB1YW3CCW5dCUM&w=893&h=1100&q=random%20portrait&ved=2ahUKEwim8_um34LsAhUE0qwKHc8sASIQMygnegUIARD8AQ',
  }),

];


