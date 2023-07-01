import { create } from 'zustand';

const url = "https://api.nal.usda.gov/fdc/v1/foods/list?api_key=mVyfMJcFQX0bmtdO0qghb1gUPaZ1MCuI1cVWVJvA"

type FoodNutrient = {
    amount: number;
    name: string;
    number: string;
    unitName: string;
};


type Food = {
    dataType: string;
    description: string;
    fdcId: number;
    foodCode: string;
    foodNutrients: {
        amount: number;
        name: string;
        number: string;
        unitName: string;

    }[];
    publicationDate: string;
};

interface FoodStore {
    food: Food[];
    setFood: () => Promise<void>;
}

const useFoodStore = create<FoodStore>((set) => ({
    food: [],
    setFood: async () => {
        const foodavail = await fetch(`${url}`);
        console.log("dataavail", foodavail);

        const foodavailjson = await foodavail.json();
        console.log("foodavailjson", foodavailjson);

        set(() => ({
            food: foodavailjson
        }));
    },
}));

export default useFoodStore;
