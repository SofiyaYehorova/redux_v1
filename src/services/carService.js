import {apiService} from "./apiService";
import {urls} from "../constants";


const carService= {
    getAll: () => apiService.get(urls.cars.base),
    create: (data) => apiService.post(urls.cars.base, data),
    getById: (id) => apiService.get(urls.cars.carById(id)),
    updateById: (id, data) => apiService.put(urls.cars.carById(id), data),
    deleteById: (id) => apiService.delete(urls.cars.carById(id))
}
export {
    carService
}

