export class keyDataModel {
    constructor(props) {
        this.calorieCount = (props.calorieCount/1000).toFixed(3).replace(".",",") + "kCal";
        this.proteinCount = props.proteinCount +"g";
        this.carbohydrateCount = props.carbohydrateCount +"g";
        this.lipidCount = props.lipidCount +"g";
    }
}

export class dailyActivityModel {
    constructor(props) {
        this.kilogram  =  props.kilogram;
        this.calories = props.calories;
        this.day  = new Date(props.day).getDate()
    }
}

export class TimeModel {
    weekdays=["0","L","M","M","J","V","S","D"]
    constructor(props) {
        this.sessionLength =  props.sessionLength;
        this.day = this.weekdays[props.day]
    }
}

export class PerformanceModel {
    translation  = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité"
    }
    constructor(props) {
        this.data = props.data.map((perf) => {
            return {
                value:perf.value,
                kind:this.translation[perf.kind]
            }
        }).reverse();
    }
}
