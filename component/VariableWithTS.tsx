import { View, Text } from 'react-native'
import React, { useState } from 'react'

const VariableWithTS: React.FC = () => {
    //how to create variable with typescript
    //let variableName:type = value;
    let myName: string = 'kalpesh';
    let myAge: number = 22;
    let isActiveUser: boolean = false;
    let userRoleNum: number[] = [1, 2, 3, 4];
    let empName: string[] = ['maria', 'aish', 'jacky']


    //normal way to create object
    // let userInfo:{name:string; salary:number} = {
    //     name:'kalpesh',
    //     salary:70000,
    // }

    //professional way to create object is using interface
    interface User {
        name: string,
        salary: number,
        isActive?: boolean
    }
    const userInfo: User = {
        name: 'maria',
        salary: 80000
    }

    //Array of object
    interface employee {
        name: string,
        age: number
    }
    const empInfo: employee[] = [
        { name: 'kalpesh', age: 16 },
        { name: 'aish', age: 22 },
        { name: 'maria', age: 18 }
    ]

    //state variable
    const [count,setCount] = useState<number>(0)
    const [name,setName] = useState<string>('')
    const [isActive,setIsActive] = useState<boolean>(false)

    //object in state
    interface Car {
        name:string,
        price:number
    }
    const [myCar,setMyCar] = useState<Car>({
        name:'bmw',
        price:888888
    })

    //Union in typescript - useful for Api state
    let status : "loading" | "success" | "error";
    status = "loading";
    status = "error";

    //Number Array State
    const [num,setNum] = useState<number[]>([]); //[2,38,4,54] etc

    //String Array State
    const [color,setColor] = useState<string[]>(['red']) //['red','green','pink']

    //Array of objects state (used in api,list, users info)
    interface CompanyData {
        id:number,
        name:string,
        address:string
    }
    const [companyInfo,setCompanyInfo] = useState<CompanyData[]>([])

    return (
        <View>
            <Text>VariableWithTS {myName} {myAge} {isActiveUser}</Text>
            {
                userRoleNum.map((val, id) => {
                    console.log(val, id)
                    return <Text key={id}>Role no. {val}</Text>
                })
            }

            {
                empName.map((val, i) => (
                    <View key={i}>
                        <Text >Employee name: {val}</Text>
                    </View>
                ))
            }

            <Text>User Info: {userInfo.name} {userInfo.salary}</Text>

            {
                empInfo.map((val,id)=>{
                    console.log(val,id)
                    return(
                        <View key={id}>
                            <Text>Name: {val.name}</Text>
                            <Text>Age: {val.age}</Text>
                            </View>
                    )
                })
            }


        </View>
    )
}

export default VariableWithTS