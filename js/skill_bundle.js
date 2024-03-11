
const skill_bundle_header_div = [
    "coiling_div",
    "wheel_div",
    "casting_div",
    "rhino_div",
    "photoshop_div",
    "illustator_div",
    "javascript_div",
    "python_div",
    "mongo_div",
    "react_div",
    "church_div",
];

const graphic_bar = [
    'coiling',
    'wheel',
    'casting',
    'rhino',
    'photoshop',
    'illustator',
    'javascript',
    'python',
    'mongo',
    'react',
    'church'
]

const description_image_list = [
    "img-card-img-coil-description",
    "img-card-img-wheel-description",
    "img-card-img-casting-description",
    "img-card-img-rhino-description",
    "img-card-img-ps-description",
    "img-card-img-il-description",
    "img-card-img-js-description",
    "img-card-img-py-description",
    "img-card-img-db-description",
    "img-card-img-react-description",
    "img-card-img-church-description"
];


function addAndOutHover (div ,imageList) {
    const documentDiv = document.getElementById(`${div}`);
    const graphic_bar_div = document.getElementById(`${graphic_bar[skill_bundle_header_div.indexOf(`${div}`)]}`);
    for (let tagNum in imageList) {
        if (Number(tagNum) === Number(skill_bundle_header_div.indexOf(`${div}`))) {
            documentDiv.addEventListener("mouseover", function() {
            document.querySelector(`.${imageList[tagNum]}`).style.zIndex = 9999;
            });
            graphic_bar_div.addEventListener("mouseover", function() {
                document.querySelector(`.${imageList[tagNum]}`).style.zIndex = 9999;
            });
        } else {
            document.querySelector(`.${imageList[tagNum]}`).style.zIndex = -1; 
        }
    }
}

function addAndOutHOut (div ,imageList) {
    const documentDiv = document.getElementById(`${div}`);
    const graphic_bar_div = document.getElementById(`${graphic_bar[skill_bundle_header_div.indexOf(`${div}`)]}`);
    for (let tagNum in imageList) {
        if (Number(tagNum) === Number(skill_bundle_header_div.indexOf(`${div}`))) {
            documentDiv.addEventListener("mouseout", function() {
            document.querySelector(`.${imageList[tagNum]}`).style.zIndex = -1;
            });
            graphic_bar_div.addEventListener("mouseout", function() {
                document.querySelector(`.${imageList[tagNum]}`).style.zIndex = -1;
            });
        } else {
            document.querySelector(`.${imageList[tagNum]}`).style.zIndex = -1;
        }
    }
}

for (let div of skill_bundle_header_div) {
    addAndOutHover(div, description_image_list);
}
for (let div of skill_bundle_header_div) {
    addAndOutHOut(div, description_image_list);
}

function animateMeter(meter_id) {
    const meter = document.getElementById(`${meter_id}`);

    if (meter.dataset.timerId === "") {
        const interval = 10; 
        let targetValue;
        if (meter.value <= 20) {
            targetValue = 50;
        } else if (20< meter.value <=60) {
            targetValue = 110;
        } else {
            targetValue = 300;
        }
        const step = (targetValue) / (100);
    
        let currentValue = 0;
        let timer = setInterval(() => {
            currentValue += step;
            meter.value = Math.round(currentValue);
            if (meter.value >= meter.dataset.targetValue) {
                clearInterval(timer);
                meter.dataset.timerId = ""
            } 
        }, interval);
        meter.dataset.timerId = timer
    }
}


for (let i of graphic_bar) {
    document.getElementById(`${i}`).addEventListener("mouseover", function() {
        animateMeter(i);
    });
}