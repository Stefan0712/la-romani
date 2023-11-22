let carouselIndex = 0;

const prevSlide = () =>{
    console.log(carouselIndex)
    switch(carouselIndex){
        case 0:
            document.getElementById(`img0`).classList.remove('focus-img');
            document.getElementById(`img6`).classList.add('focus-img');
            document.getElementById(`img-list-0`).classList.remove('focus-list');
            document.getElementById(`img-list-6`).classList.add('focus-list');
            carouselIndex = 6;
            break;
        case 1:
            document.getElementById(`img1`).classList.remove('focus-img');
            document.getElementById(`img0`).classList.add('focus-img');
            document.getElementById(`img-list-1`).classList.remove('focus-list');
            document.getElementById(`img-list-0`).classList.add('focus-list');
            carouselIndex = 0;
            break;
        case 2:
            document.getElementById(`img2`).classList.remove('focus-img');
            document.getElementById(`img1`).classList.add('focus-img');
            document.getElementById(`img-list-2`).classList.remove('focus-list');
            document.getElementById(`img-list-1`).classList.add('focus-list');
            carouselIndex = 1;
            break;
        case 3:
            document.getElementById(`img3`).classList.remove('focus-img');
            document.getElementById(`img2`).classList.add('focus-img');
            document.getElementById(`img-list-3`).classList.remove('focus-list');
            document.getElementById(`img-list-2`).classList.add('focus-list');
            carouselIndex = 2;
            break;
        case 4:
            document.getElementById(`img4`).classList.remove('focus-img');
            document.getElementById(`img3`).classList.add('focus-img');
            document.getElementById(`img-list-4`).classList.remove('focus-list');
            document.getElementById(`img-list-3`).classList.add('focus-list');
            carouselIndex = 3;
            break;
        case 5:
            document.getElementById(`img5`).classList.remove('focus-img');
            document.getElementById(`img4`).classList.add('focus-img');
            document.getElementById(`img-list-5`).classList.remove('focus-list');
            document.getElementById(`img-list-4`).classList.add('focus-list');
            carouselIndex = 4;
            break;
        case 6:
            document.getElementById(`img6`).classList.remove('focus-img');
            document.getElementById(`img5`).classList.add('focus-img');
            document.getElementById(`img-list-6`).classList.remove('focus-list');
            document.getElementById(`img-list-5`).classList.add('focus-list');
            carouselIndex = 5;
            break;
    }
}


const nextSlide = () =>{
    switch(carouselIndex){
        case 0:
            document.getElementById(`img0`).classList.remove('focus-img');
            document.getElementById(`img1`).classList.add('focus-img');
            document.getElementById(`img-list-0`).classList.remove('focus-list');
            document.getElementById(`img-list-1`).classList.add('focus-list');
            carouselIndex = 1;
            break;
        case 1:
            document.getElementById(`img1`).classList.remove('focus-img');
            document.getElementById(`img2`).classList.add('focus-img');
            document.getElementById(`img-list-1`).classList.remove('focus-list');
            document.getElementById(`img-list-2`).classList.add('focus-list');
            carouselIndex = 2;
            break;
        case 2:
            document.getElementById(`img2`).classList.remove('focus-img');
            document.getElementById(`img3`).classList.add('focus-img');
            document.getElementById(`img-list-2`).classList.remove('focus-list');
            document.getElementById(`img-list-3`).classList.add('focus-list');
            carouselIndex = 3;
            break;
        case 3:
            document.getElementById(`img3`).classList.remove('focus-img');
            document.getElementById(`img4`).classList.add('focus-img');
            document.getElementById(`img-list-3`).classList.remove('focus-list');
            document.getElementById(`img-list-4`).classList.add('focus-list');
            carouselIndex = 4;
            break;
        case 4:
            document.getElementById(`img4`).classList.remove('focus-img');
            document.getElementById(`img5`).classList.add('focus-img');
            document.getElementById(`img-list-4`).classList.remove('focus-list');
            document.getElementById(`img-list-5`).classList.add('focus-list');
            carouselIndex = 5;
            break;
        case 5:
            document.getElementById(`img5`).classList.remove('focus-img');
            document.getElementById(`img6`).classList.add('focus-img');
            document.getElementById(`img-list-5`).classList.remove('focus-list');
            document.getElementById(`img-list-6`).classList.add('focus-list');
            carouselIndex = 6;
            break;
        case 6:
            document.getElementById(`img6`).classList.remove('focus-img');
            document.getElementById(`img0`).classList.add('focus-img');
            document.getElementById(`img-list-6`).classList.remove('focus-list');
            document.getElementById(`img-list-0`).classList.add('focus-list');
            carouselIndex = 0;
            break;
    }
    
}
const handleListClick = (index) =>{
    
    switch(index){
        case 0:
            document.getElementById(`img${carouselIndex}`).classList.remove('focus-img');
            document.getElementById(`img-list-${carouselIndex}`).classList.remove('focus-list');
            document.getElementById(`img0`).classList.add('focus-img');
            document.getElementById(`img-list-0`).classList.add('focus-list');
            break;
        case 1:
            document.getElementById(`img${carouselIndex}`).classList.remove('focus-img');
            document.getElementById(`img-list-${carouselIndex}`).classList.remove('focus-list');
            document.getElementById(`img1`).classList.add('focus-img');
            document.getElementById(`img-list-1`).classList.add('focus-list');
            break;
        case 2:
            document.getElementById(`img${carouselIndex}`).classList.remove('focus-img');
            document.getElementById(`img-list-${carouselIndex}`).classList.remove('focus-list');
            document.getElementById(`img2`).classList.add('focus-img');
            document.getElementById(`img-list-2`).classList.add('focus-list');
            break;
        case 3:
            document.getElementById(`img${carouselIndex}`).classList.remove('focus-img');
            document.getElementById(`img-list-${carouselIndex}`).classList.remove('focus-list');
            document.getElementById(`img3`).classList.add('focus-img');
            document.getElementById(`img-list-3`).classList.add('focus-list');
            break;
        case 4:
            document.getElementById(`img${carouselIndex}`).classList.remove('focus-img');
            document.getElementById(`img-list-${carouselIndex}`).classList.remove('focus-list');
            document.getElementById(`img4`).classList.add('focus-img');
            document.getElementById(`img-list-4`).classList.add('focus-list');
            break;
        case 5:
            document.getElementById(`img${carouselIndex}`).classList.remove('focus-img');
            document.getElementById(`img-list-${carouselIndex}`).classList.remove('focus-list');
            document.getElementById(`img5`).classList.add('focus-img');
            document.getElementById(`img-list-5`).classList.add('focus-list');
            break;
        case 6:
            document.getElementById(`img${carouselIndex}`).classList.remove('focus-img');
            document.getElementById(`img-list-${carouselIndex}`).classList.remove('focus-list');
            document.getElementById(`img6`).classList.add('focus-img');
            document.getElementById(`img-list-6`).classList.add('focus-list');
            break;
    }
    carouselIndex = index;
   

    
}



const toggleMenu = () =>{
    document.getElementById('menu-btn').classList.toggle('close')
    document.querySelector('.nav-links').classList.toggle('show-menu')
}



