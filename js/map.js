ymaps.ready(function(){var e=new ymaps.Map("map",{center:[59.938635,30.323118],zoom:17},{searchControlProvider:"yandex#search"}),a=(ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),new ymaps.Placemark(e.getCenter(),{hintContent:"Собственный значок метки",balloonContent:"ул. Большая Конюшенная, 19/8"},{iconLayout:"default#image",iconImageHref:"img/map_marker.png",iconImageSize:[36,35]}));e.geoObjects.add(a)});
