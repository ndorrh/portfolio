const projectContainer = document.getElementById('work');
const popUp = document.getElementById('work-popup');
const projects = [
  {
    id: 1,
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',

    feauturedImage: 'url(\'images/brithday.png\')',
    feauturedImageMobile: 'url(\'images/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'images/desktop.png\')',
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
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    feauturedImage: 'url(\'images/brithday.png\')',
    feauturedImageMobile: 'url(\'images/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'images/desktop.png\')',
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
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    feauturedImage: 'url(\'images/brithday.png\')',
    feauturedImageMobile: 'url(\'images/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'images/desktop.png\')',
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
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    feauturedImage: 'url(\'images/brithday.png\')',
    feauturedImageMobile: 'url(\'images/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'images/desktop.png\')',
    technologies: {
      backend: 'Ruby on rails',
      style: 'CSS',
      frontEnd: 'JavaScript',
      markUP: 'HTML',
    },
    linkToLiveVersion: 'https://twitter.com/ndorrh',
    linkToSource: 'https://github.com/ndorrh/portfolio',
  },

  {
    id: 5,
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    feauturedImage: 'url(\'images/brithday.png\')',
    feauturedImageMobile: 'url(\'images/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'images/desktop.png\')',
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
    name: 'Multi-Post Stories  Gain+Glory',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    feauturedImage: 'url(\'images/brithday.png\')',
    feauturedImageMobile: 'url(\'images/mobileport.png\')',
    feauturedImageDeskTop: 'url(\'images/desktop.png\')',
    technologies: {
      backend: 'Ruby on rails',
      style: 'CSS',
      frontEnd: 'JavaScript',
      markUP: 'HTML',
    },
    linkToLiveVersion: 'https://ndorrh.github.io/portfolio/',
    linkToSource: 'https://github.com/ndorrh/portfolio',
  },

];

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

const addLinkToModalButtons = (link) => {
  const aTag = document.createElement('a');
  aTag.setAttribute('href', link);
  aTag.click();
};

const addIcon = (link) => {
  const icon = document.createElement('img');
  icon.src = link;
  return icon;
};

const div1 = createElementWithIdAndClassName('div', 'work-intro-container', 'intro');
const head = createElementWithIdAndClassName('h2', 'work-intro', 'intro-text');
const line = createElementWithIdAndClassName('span', 'line', 'line');
const div2 = createElementWithIdAndClassName('div', 'my-work', 'work-card');
addInnerHtmlAndApendToParent('My Recent <br class="wb" />Works', div1, head);
addInnerHtmlAndApendToParent('', div1, line);
projectContainer.appendChild(div1);
addInnerHtmlAndApendToParent('', projectContainer, div2);
const feauturedImageContainer = createElementWithIdAndClassName('div', 'featured-image-container', 'images');
const sectionPopup = createElementWithIdAndClassName('section', 'project1 project-text1', 'project1');
const div3Popup = createElementWithIdAndClassName('div', 'project-title1', 'title1');
const projectNamePopup = createElementWithIdAndClassName('h4', 'project-name', 'project_name1');
const technologyPopup = createElementWithIdAndClassName('ul', 'langues-use', 'technologypopUp');
const technologyItem1Popup = createElementWithIdAndClassName('li', 'language', 'technology-item');
const technologyItem2Popup = createElementWithIdAndClassName('li', 'language', 'technology-item');
const technologyItem3Popup = createElementWithIdAndClassName('li', 'language', 'technology-item');
const technologyItem4Popup = createElementWithIdAndClassName('li', 'language', 'technology-item');
const seelive = createElementWithIdAndClassName('button', 'see-project', 'live-demo');
const projectDetails = createElementWithIdAndClassName('p', 'project-details', 'details');
const liveAndSourceBtn = createElementWithIdAndClassName('div', 'live-source', 'live');
const seeSource = createElementWithIdAndClassName('button', 'see-project', 'source');

const closeBttn = createElementWithIdAndClassName('i', 'fa fa-times', 'closeddds');
addInnerHtmlAndApendToParent('', popUp, closeBttn);
addInnerHtmlAndApendToParent('', popUp, sectionPopup);
addInnerHtmlAndApendToParent('', sectionPopup, feauturedImageContainer);
addInnerHtmlAndApendToParent('', sectionPopup, div3Popup);
addInnerHtmlAndApendToParent('', sectionPopup, liveAndSourceBtn);
addInnerHtmlAndApendToParent('', sectionPopup, technologyPopup);

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
    feauturedImageContainer.style.backgroundImage = `${projects[projects.indexOf(i)].feauturedImageDeskTop}`;
    addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].name}`, div3Popup, projectNamePopup);
    addInnerHtmlAndApendToParent('See live', liveAndSourceBtn, seelive);
    addInnerHtmlAndApendToParent('', seelive, addIcon('images/liveDemo.svg'));
    addInnerHtmlAndApendToParent('See Source  ', liveAndSourceBtn, seeSource);
    addInnerHtmlAndApendToParent('', seeSource, addIcon('images/gitIcon.png'));
    addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.backend}`, technologyPopup, technologyItem1Popup);
    addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.style}`, technologyPopup, technologyItem2Popup);
    addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.frontEnd}`, technologyPopup, technologyItem3Popup);
    addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].technologies.markUP}`, technologyPopup, technologyItem4Popup);
    addInnerHtmlAndApendToParent(`${projects[projects.indexOf(i)].projectDescription}`, sectionPopup, projectDetails);

    seelive.addEventListener('click', () => {
      addLinkToModalButtons(projects[projects.indexOf(i)].linkToLiveVersion);
    });
    seeSource.addEventListener('click', () => {
      addLinkToModalButtons(projects[projects.indexOf(i)].linkToSource);
    });

    popUp.style.display = 'block';
    projectContainer.style.display = 'none';
  });
});

closeBttn.addEventListener('click', () => {
  popUp.style.display = 'none';
  projectContainer.style.display = 'block';
});
