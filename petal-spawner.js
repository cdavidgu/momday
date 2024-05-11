AFRAME.registerComponent('petal-spawner', {
    init: function () {

        this.el.sceneEl.addEventListener('loaded', event => {
            console.log("SCENE LOADED")
            // petal = this.el.sceneEl.components.pool.requestEntity();
            xOffset = 0
            while (xOffset < 16) {
                xOffset += 1;
                petal = this.el.sceneEl.components.pool.requestEntity();
                if (petal) {
                    console.log(xOffset);
                    randomVector = this.randomPos();
                    // console.log(randomVector);
                    petal.object3D.position.set(randomVector.x, randomVector.y, randomVector.z);
                    petal.object3D.scale.set(0.2, 0.2, 0.2);
                    // setTimeout(this.el.sceneEl.components.pool.returnEntity(petal), 1000)
                }
            }
        });
    },

    randomPos() {
        xMax = 1;
        xMin = -1;
        yMax = 1;
        yMin = -1;
        zMax = -1;
        zMin = -1;
        return {
            x: Math.random() * (xMax - xMin) + xMin,
            y: Math.random() * (yMax - yMin) + yMin,
            z: Math.random() * (zMax - zMin) + zMin,
        };
    }
});