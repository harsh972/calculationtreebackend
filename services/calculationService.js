const { Calculation, Operation } = require('../models/Calculation');

exports.createCalculation = async (startingNumber) => {
    const calculation = new Calculation({ startingNumber });
    await calculation.save();
    return calculation;
};

exports.addOperation = async (calculationId, type, value) => {
    try {
        let calculation = await Calculation.findById(calculationId);
        const operation = new Operation({ parentId: calculationId, type, value });
        await operation.save();
        if(!calculation){
            calculation = new Calculation({ startingNumber: 0,currentValue:0, operations: [] });
            operation.parentId = calculation.id;
            await operation.save();
        }
        let newCurrentValue = calculation.currentValue == 0?calculation.startingNumber:calculation.currentValue;
        switch(type){
            case 'addition':
                newCurrentValue += value;
                break;
            case 'subtraction':
                newCurrentValue -= value;
                break;
            case 'multiplication':
                newCurrentValue *= value;
                break;
            case 'division':
                if(value !== 0){
                    newCurrentValue /= value;
                } 
                else{
                    throw new Error('Division by zero is not allowed');
                }
                break;
            default:
                throw new Error('Invalid operation type');
        }
        calculation.currentValue = newCurrentValue;
        calculation.operations.push(operation);
        await calculation.save();
        return operation;
    }
    catch (error) {
        throw new Error('Failed to add operation: ' + error.message);
    }
};
