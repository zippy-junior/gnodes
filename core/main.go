package main

import (
	"github.com/divan/three"
	"github.com/gopherjs/gopherjs/js"
)

func main() {
	width := js.Global.Get("innerWidth").Float()
	height := js.Global.Get("innerHeight").Float()

	renderer := three.NewWebGLRenderer()
	renderer.SetSize(width, height, true)
	js.Global.Get("document").Get("body").Call("appendChild", renderer.Get("domElement"))

	// setup camera and scene
	camera := three.NewPerspectiveCamera(70, width/height, 1, 1000)
	camera.Position.Set(0, 0, 500)

	scene := three.NewScene()

	// lights
	light := three.NewDirectionalLight(three.NewColor("white"), 1)
	light.Position.Set(0, 256, 256)
	scene.Add(light)

	// material
	params := three.NewMaterialParameters()
	params.Color = three.NewColor("blue")
	mat := three.NewMeshLambertMaterial(params)

	// cube object
	geom := three.NewBoxGeometry(&three.BoxGeometryParameters{
		Width:  200,
		Height: 200,
		Depth:  200,
	})
	mesh := three.NewMesh(geom, mat)
	scene.Add(mesh)

	// start animation
	var animate func()
	animate = func() {
		js.Global.Call("requestAnimationFrame", animate)
		mesh.Rotation.Set("y", mesh.Rotation.Get("y").Float()+0.01)
		renderer.Render(scene, camera)
	}
	animate()
}
