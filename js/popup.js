const projectContainer = document.getElementById('work');
const popUp = document.getElementById('work-popup');

const projects = [
    {
        id: 1,
        name: 'Multi-Post Stories XXXX <br />Gain+Glory',
        projectDescription: 'zcboajfbaf joadofbsdbas',
        feauturedImage: 'url(\'images/brithday.png\')',
        technologies: {
            backend: 'Ruby on rails',
            style: 'CSS',
            frontEnd: 'JavaScript',
            markUP: 'HTML',
        },
        linkToLiveVersion: 'https://ndorrh.github.io/portfolio/',
        linkToSource: 'https://github.com/ndorrh/portfolio',
    },

    {
        id: 2,
        name: 'Multi-Post Stories <br />Gain+Glory',
        projectDescription: 'zcboajfbaf joadofbsdbas',
        feauturedImage: 'url(\'images/brithday.png\')',
        technologies: {
            backend: 'Ruby on rails',
            style: 'CSS',
            frontEnd: 'JavaScript',
            markUP: 'HTML',
        },
        linkToLiveVersion: 'https://ndorrh.github.io/portfolio/',
        linkToSource: 'https://github.com/ndorrh/portfolio',
    },

    {
        id: 3,
        name: 'Multi-Post Stories <br />Gain+Glory',
        projectDescription: 'zcboajfbaf joadofbsdbas',
        feauturedImage: 'url(\'images/brithday.png\')',
        technologies: {
            backend: 'Ruby on rails',
            style: 'CSS',
            frontEnd: 'JavaScript',
            markUP: 'HTML',
        },
        linkToLiveVersion: 'https://ndorrh.github.io/portfolio/',
        linkToSource: 'https://github.com/ndorrh/portfolio',
    },

    {
        id: 4,
        name: 'Multi-Post Stories <br />Gain+Glory',
        projectDescription: 'zcboajfbaf joadofbsdbas',
        feauturedImage: 'url(\'images/brithday.png\')',
        technologies: {
            backend: 'Ruby on rails',
            style: 'CSS',
            frontEnd: 'JavaScript',
            markUP: 'HTML',
        },
        linkToLiveVersion: 'https://ndorrh.github.io/portfolio/',
        linkToSource: 'https://github.com/ndorrh/portfolio',
    },

    {
        id: 5,
        name: 'Multi-Post Stories <br />Gain+Glory',
        projectDescription: 'zcboajfbaf joadofbsdbas',
        feauturedImage: 'url(\'images/brithday.png\')',
        technologies: {
            backend: 'Ruby on rails',
            style: 'CSS',
            frontEnd: 'JavaScript',
            markUP: 'HTML',
        },
        linkToLiveVersion: 'https://ndorrh.github.io/portfolio/',
        linkToSource: 'https://github.com/ndorrh/portfolio',
    },

    {
        id: 6,
        name: 'Multi-Post Stories <br />Gain+Glory',
        projectDescription: 'zcboajfbaf joadofbsdbas',
        feauturedImage: 'url(\'images/brithday.png\')',
        technologies: {
            backend: 'Ruby on rails',
            style: 'CSS',
            frontEnd: 'JavaScript',
            markUP: 'HTML',
        },
        linkToLiveVersion: 'https://ndorrh.github.io/portfolio/',
        linkToSource: 'https://github.com/ndorrh/portfolio',
    },

]

const createElementWithIdAndClassName = (elem, className, id) => {
    const element = document.createElement(`${elem}`);
    element.className = `${className}`;
    element.id = `${id}`;
    return element;
};

const addInnerHtmlAndApendToParent = (text, parent, child) => {
    child.innerHTML = `${text}`;
    parent.appendChild(child);
    return parent;
};

const div1 = createElementWithIdAndClassName('div', 'work-intro-container', 'intro');
const head = createElementWithIdAndClassName('h2', 'work-intro', 'intro-text');
const line = createElementWithIdAndClassName('span', 'line', 'line');
const div2 = createElementWithIdAndClassName('div', 'my-work', 'work-card');
addInnerHtmlAndApendToParent('My Recent <br class="wb" />Works', div1, head);
addInnerHtmlAndApendToParent('', div1, line);
projectContainer.appendChild(div1);
addInnerHtmlAndApendToParent('', projectContainer, div2);


const sectionPopup = createElementWithIdAndClassName('section', 'project project-text', 'project');
const div3Popup = createElementWithIdAndClassName('div', 'project-title', 'title');
const projectNamePopup = createElementWithIdAndClassName('h4', 'project-name', 'project_name');
const technologyPopup = createElementWithIdAndClassName('ul', 'langues-use', 'technology');
const technologyItem1Popup = createElementWithIdAndClassName('li', 'language', 'technology-item');
const technologyItem2Popup = createElementWithIdAndClassName('li', 'language', 'technology-item');
const technologyItem3Popup = createElementWithIdAndClassName('li', 'language', 'technology-item');
const technologyItem4Popup = createElementWithIdAndClassName('li', 'language', 'technology-item');
const seeProjectBtnPopup = createElementWithIdAndClassName('button', 'see-project', 'project-btn');
const closeBttn = createElementWithIdAndClassName('i', 'fa fa-times', 'closeddds');
addInnerHtmlAndApendToParent('', popUp, closeBttn)
addInnerHtmlAndApendToParent('', popUp, sectionPopup);
addInnerHtmlAndApendToParent('', sectionPopup, div3Popup);
addInnerHtmlAndApendToParent('See Project', div3Popup, seeProjectBtnPopup);
addInnerHtmlAndApendToParent('', div3Popup, technologyPopup);

projects.forEach((i) => {


    const section = createElementWithIdAndClassName('section', 'project project-text', 'project');
    const div3 = createElementWithIdAndClassName('div', 'project-title', 'title');
    const projectName = createElementWithIdAndClassName('h4', 'project-name', 'project_name');
    const technology = createElementWithIdAndClassName('ul', 'langues-use', 'technology');
    const technologyItem1 = createElementWithIdAndClassName('li', 'language', 'technology-item');
    const technologyItem2 = createElementWithIdAndClassName('li', 'language', 'technology-item');
    const technologyItem3 = createElementWithIdAndClassName('li', 'language', 'technology-item');
    const technologyItem4 = createElementWithIdAndClassName('li', 'language', 'technology-item');
    const seeProjectBtn = createElementWithIdAndClassName('button', 'see-project', 'project-btn');




    addInnerHtmlAndApendToParent('', div2, section);
    addInnerHtmlAndApendToParent('', section, div3);
    section.style.backgroundImage = `${projects[projects.indexOf(i)].feauturedImage}`;
    addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].name}`, div3, projectName);
    addInnerHtmlAndApendToParent('', div3, technology);
    addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.backend}`, technology, technologyItem1);
    addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.style}`, technology, technologyItem2);
    addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.frontEnd}`, technology, technologyItem3);
    addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.markUP}`, technology, technologyItem4);
    addInnerHtmlAndApendToParent('See Project', div3, seeProjectBtn);
    
    seeProjectBtn.addEventListener('click', () => {
        sectionPopup.style.backgroundImage = `${projects[projects.indexOf(i)].feauturedImage}`;
        addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].name}`, div3Popup, projectNamePopup);
        addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.backend}`, technologyPopup, technologyItem1Popup);
        addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.style}`, technologyPopup, technologyItem2Popup);
        addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.frontEnd}`, technologyPopup, technologyItem3Popup);
        addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.markUP}`, technologyPopup, technologyItem4Popup);
        popUp.style.display = 'block';
        projectContainer.style.display = 'none';
    });

});



closeBttn.addEventListener('click', () => {
    popUp.style.display = 'none';
    projectContainer.style.display = 'block';
});

