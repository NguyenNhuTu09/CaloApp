import React from 'react'

import Chicken2 from '../assets/Food/Chicken2.jpg'
import Ham from '../assets/Food/Ham.jpg'
import Suachua from '../assets/Food/Sua chua.jpg'
import Chuoi from '../assets/Food/Chuoi.jpg'
import Catuyet from '../assets/Food/Ca tuyet.jpg'
import Cangu from '../assets/Food/Ca ngu.jpg'
import Cahoi from '../assets/Food/Ca hoi.jpg'
import Thitbo from '../assets/Food/Thit bo.jpg'
import Hanhnhan from '../assets/Food/Hanh nhan.jpg'
import Khoailang from '../assets/Food/Khoai lang.jpg'
import Carophi from '../assets/Food/Ca ro phi.jpg'
import Bibau from '../assets/Food/Bi bau.jpg'
import Bachtuoc from '../assets/Food/Bach tuoc.jpg'


import Phobo from '../assets/Food/Pho bo.jpg'
import Hutieu from '../assets/Food/Hu tieu.jpg'
import Whey from '../assets/Food/Whey.jfif'
import Capuchino from '../assets/Food/Capuchino.jpg'
import Namhuong from '../assets/Food/Nam huong.jpg'
import Nuoceptao from '../assets/Food/Nuoc ep tao.jpg'

import Banhmithitga from '../assets/Food/Banh mi thit ga.jpg'
import Gatandoori from '../assets/Food/Ga tandoori.jpg'
import Boapchao from '../assets/Food/Bo ap chao.jpg'
import {AiFillStar} from 'react-icons/ai'
import starIcons from '../assets/Star.png'

const OptionsDetailFood = [
  {
    id: 1,
    nameFood: 'Ức gà nướng',
    Type: 'Protein',
    imageFood: Chicken2,
    star: 4.5,
    ration: 250,
    totalCalories: 650,
    mainMaterial: 'Ức gà',
    auxiliaryMaterials: 'Không',
    Additives: 'Dầu ăn , tiêu',
    processing: 'Chiên, luộc',
    description: 'Luộc xong rồi chiên....',
  },
  {
    id: 2,
    nameFood: 'Giăm bông',
    Type: 'Protein',
    imageFood: Ham,
    star: 4.7,
    ration: 145,
    totalCalories: 370,
    mainMaterial: 'Thịt lợn',
    auxiliaryMaterials: 'Không',
    Additives: 'Muối',
    processing: 'Luộc',
    description: 'Ngâm muối',
  },
  {
    id: 3,
    nameFood: 'Sữa chua',
    Type: 'Tiêu hóa',
    imageFood: Suachua,
    star: 4.3,
    ration: 59,
    totalCalories: 150,
    mainMaterial: 'Sữa đặc, đường',
    auxiliaryMaterials: 'Không',
    Additives: 'Không',
    processing: 'Ủ',
    description: '....',
  },
  {
    id: 4,
    nameFood: 'Cá tuyết',
    Type: 'Protein',
    imageFood: Catuyet,
    star: 5.0,
    ration: 82,
    totalCalories: 300,
    mainMaterial: 'Cá tuyết phi lê',
    auxiliaryMaterials: 'Bơ',
    Additives: 'Dầu ăn, nước tương, tiêu',
    processing: 'Chiên, luộc',
    description: '....',
  },
  {
    id: 5,
    nameFood: 'Chuối',
    Type: 'Chất xơ',
    imageFood: Chuoi,
    star: 5.0,
    ration: 65,
    totalCalories: 200,
    mainMaterial: 'Không',
    auxiliaryMaterials: 'Không',
    Additives: 'Không',
    processing: 'Ăn trực tiếp',
    description: '....',
  },
  {
    id: 6,
    nameFood: 'Cá ngừ',
    Type: 'Protein',
    imageFood: Cangu,
    star: 5.0,
    ration: 85,
    totalCalories: 250,
    mainMaterial: 'Cá ngừ phi lê',
    auxiliaryMaterials: 'Không',
    Additives: 'Dầu ăn, tiêu',
    processing: 'Ăn trực tiếp',
    description: '....',
  },
  
]

const Data = () => {
  return (
    OptionsDetailFood
  )
}
export default Data
