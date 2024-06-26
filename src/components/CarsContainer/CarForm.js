import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    const save = async (car) => {
        await carService.create(car)
        dispatch(carActions.trigger())
        reset()
    }

    const update=async (car)=>{
        await carService.updateById(carForUpdate.id, car)
        dispatch(carActions.trigger())
        dispatch(carActions.setCarForUpdate(null))
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};