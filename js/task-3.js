const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createImageItem = item => {
    const itemRef = document.createElement('li');
    itemRef.classList.add('item');

    const imegeRef = document.createElement('img');
    imegeRef.src = item.url;
    imegeRef.alt = item.alt;     

    itemRef.appendChild(imegeRef);
    return itemRef;
}

const createGallery = images.map(item => createImageItem(item));

const galleryRef = document.querySelector('#gallery');
galleryRef.append(...createGallery);