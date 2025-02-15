import './style.css'
import * as THREE from 'three'
import { addBoilerPlateMesh } from './addmeshes'
import { addStandardMesh } from './addmeshes'
import { addLight } from './addLight'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({antialas:true})
const camera= new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)
camera.position.set(0, 0, 5)
//let mesh;
const meshes = {}

init()
function init(){
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  //meshes
  meshes.default = addBoilerPlateMesh()
  meshes.standard = addStandardMesh()
  meshes.defaultLight = addLight()

  scene.add(meshes.default)
  scene.add(meshes.standard)
  scene.add(meshes.defaultLight)

  //meshes.default.position.set(0,0,-15)

  // const geometry = new THREE.BoxGeometry(1, 2, 1)
  // const material = new THREE.MeshBasicMaterial({color: 0xff0000})
  // const mesh = new THREE.Mesh(geometry, material)
  // mesh.position.set(0, 0, -5)

  // meshes.default = mesh
  // scene.add(meshes.default)

  resize()
  animate()
}

function resize(){
  window.addEventListener('resize' , ()=>{
    renderer.setSize(window.innerWidth, width.innerwidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
}

function animate(){
  requestAnimationFrame(animate)
  //meshes.default.position.x += 0.001
  meshes.default.rotation.x+=0.01
  meshes.standard.rotation.z+=0.01
  renderer.render(scene, camera)
}



