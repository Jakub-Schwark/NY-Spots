const unClickOaza = document.getElementById('oaza-normal');
const clickOaza = document.getElementById('oaza-click');
const unClickDunska = document.getElementById('dunska-normal');
const clickDunska = document.getElementById('dunska-click');
const unClickForest = document.getElementById('forest-normal');
const clickForest = document.getElementById('forest-click');
const unClickAloha = document.getElementById('aloha-normal');
const clickAloha = document.getElementById('aloha-click');
const unClickPark = document.getElementById('park-normal');
const clickPark = document.getElementById('park-click');
const myIframe = document.getElementById('myiFrame');

unClickOaza.addEventListener('click', function() {
    unClickOaza.style.display = 'none';
    clickOaza.style.display = 'block';
    const clickArr = [clickDunska, clickForest, clickAloha, clickPark];
    const unClickArr = [unClickDunska, unClickForest, unClickAloha, unClickPark];
    clickArr.forEach(element => {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        }
    });
    unClickArr.forEach(element => {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        }
    });
    let srcOaza = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2281083661273!2d-74.01534963459501!3d40.71299467933169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2s1%20World%20Trade%20Center!5e0!3m2!1spl!2spl!4v1648739404756!5m2!1spl!2spl"
    changeMap(srcOaza);
});
unClickDunska.addEventListener('click', function() {
    unClickDunska.style.display = 'none';
    clickDunska.style.display = 'block';
    const clickArr = [clickAloha, clickForest, clickOaza, clickPark];
    const unClickArr = [unClickAloha, unClickForest, unClickOaza, unClickPark];
    clickArr.forEach(element => {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        }
    });
    unClickArr.forEach(element => {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        }
    });
    let srcDunska = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40394.25928289135!2d-73.96812843469182!3d40.77760194502942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1spl!2spl!4v1648740087605!5m2!1spl!2spl"
    changeMap(srcDunska);
});
unClickForest.addEventListener('click', function() {
    unClickForest.style.display = 'none';
    clickForest.style.display = 'block';
    const clickArr = [clickDunska, clickAloha, clickOaza, clickPark];
    const unClickArr = [unClickDunska, unClickAloha, unClickOaza, unClickPark];
    clickArr.forEach(element => {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        }
    });
    unClickArr.forEach(element => {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        }
    });
    let srcForest = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.760867912925!2d-74.01550401974565!3d40.70126395583914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a128d64db9b%3A0xacfba1747b40b4d4!2sStatue%20of%20Liberty%20View%20Point!5e0!3m2!1spl!2spl!4v1648739748841!5m2!1spl!2spl"
    changeMap(srcForest);
});
unClickAloha.addEventListener('click', function() {
    unClickAloha.style.display = 'none';
    clickAloha.style.display = 'block';
    const clickArr = [clickDunska, clickForest, clickOaza, clickPark];
    const unClickArr = [unClickDunska, unClickForest, unClickOaza, unClickPark];
    clickArr.forEach(element => {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        }
    });
    unClickArr.forEach(element => {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        }
    });
    let srcAloha = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9385.480832261732!2d-73.9739151771558!3d40.77534854931633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1spl!2spl!4v1648739952618!5m2!1spl!2spl"
    changeMap(srcAloha);
});
unClickPark.addEventListener('click', function() {
    unClickPark.style.display = 'none';
    clickPark.style.display = 'block';
    const clickArr = [clickDunska, clickAloha, clickOaza, clickForest];
    const unClickArr = [unClickDunska, unClickAloha, unClickOaza, unClickForest];
    clickArr.forEach(element => {
        if (element.style.display === 'block') {
            element.style.display = 'none';
        }
    });
    unClickArr.forEach(element => {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        }
    });
    let srcPark = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33051.52128364834!2d-74.00752045298167!3d40.741268229540694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f71c1f67%3A0xde2a6125ed704926!2sFlatiron!5e0!3m2!1spl!2spl!4v1648740244380!5m2!1spl!2spl"
    changeMap(srcPark);
});

const changeMap = (src) => {
    myIframe.src = src;
}