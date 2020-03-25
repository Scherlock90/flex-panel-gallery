import React from 'react';
import { CustomButton } from '../gallery-elements/index'

export const MainGallery = ({
    setGrayscale,
    setNormal,
    rightClick,
    leftClick,
    makeGrey,
    photoList,
}) => {
    return (
        <>
            <div className="container-main">
                <CustomButton
                    variant={"contained"}
                    color={"primary"}
                    onClick={leftClick}
                    name={"Left"}
                />
                <div className="container" style={makeGrey}>
                    {photoList}
                </div>
                <CustomButton
                    variant={"contained"}
                    color={"primary"}
                    onClick={rightClick}
                    name={"Right"}
                />
            </div>
            <div className="buttons-gallery">
                <CustomButton
                    variant={"contained"}
                    color={"primary"}
                    onClick={setGrayscale}
                    name={"Grayscale"}
                />
                <CustomButton
                    variant={"contained"}
                    color={"secondary"}
                    onClick={setNormal}
                    name={"Normal"}
                />
            </div>
        </>
    )
}