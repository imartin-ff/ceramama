function priceSet(data) {
  let price = Number.prototype.toFixed.call(parseFloat(data) || 0, 2),
    price_sep = price.replace(/(\D)/g, ",");
  price_sep = price_sep.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
  return price_sep;
}

if ($(".products-el__hover div").length > 9) {
  $(".products-el__hover div").on("mouseenter", function () {
    let $wrap = $(this).closest(".products-el");
    let ind = $(this).index();
    let $images = $wrap.find(".products-el__img-img");
    let $dots = $wrap.find(".block-dots__el");
    $images.hide();
    $images.eq(ind).fadeIn(300);
    $dots.removeClass("active");
    $dots.eq(ind).addClass("active");
  });
}

if ($(".calc-product-act__btn_plus").length > 0) {
  $(".calc-product-act__btn_plus").on("click", function () {
    let $wrap = $(this).closest(".block-calc-product");
    let $wrapAll = $(this).closest(".wrap-calc");
    let count = parseInt($wrap.data("count"));
    let m = parseFloat($wrap.data("m"));
    let cost = parseFloat($wrap.data("cost"));
    let pack = $wrap.find(".block-calc-product__pack").val();

    pack++;

    let count_new = pack * count;
    let m_new = pack * m;
    m_new = m_new.toFixed(2);
    let cost_new = pack * cost;

    $wrap.find(".block-calc-product__pack").val(pack);
    $wrap.find(".block-calc-product__count").val(count_new);
    $wrap.find(".block-calc-product__m").val(m_new);
    $wrapAll.find(".wrap-calc__cost-val").text(priceSet(cost_new));

    return false;
  });
}

if ($(".calc-product-act__btn_min").length > 0) {
  $(".calc-product-act__btn_min").on("click", function () {
    let $wrap = $(this).closest(".block-calc-product");
    let $wrapAll = $(this).closest(".wrap-calc");
    let count = parseInt($wrap.data("count"));
    let m = parseFloat($wrap.data("m"));
    let cost = parseFloat($wrap.data("cost"));
    let pack = $wrap.find(".block-calc-product__pack").val();

    pack--;
    if (pack === 0) {
      return false;
    }

    let count_new = pack * count;
    let m_new = pack * m;
    m_new = m_new.toFixed(2);
    let cost_new = pack * cost;

    $wrap.find(".block-calc-product__pack").val(pack);
    $wrap.find(".block-calc-product__count").val(count_new);
    $wrap.find(".block-calc-product__m").val(m_new);
    $wrapAll.find(".wrap-calc__cost-val").text(priceSet(cost_new));

    return false;
  });
}

if ($(".categories__type-title").length) {
  $(".categories__type-title").first().addClass("active");
  $(".categories__type-title")
    .first()
    .closest(".categories__type")
    .children(".categories__type-items")
    .removeClass("categories__type-items--hide");

  $(".categories__type-title").on("click", function () {
    $(this)
      .closest(".categories__type")
      .children(".categories__type-items")
      .toggleClass("categories__type-items--hide");

    $(this).toggleClass("active");
  });
}
