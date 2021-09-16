import CountUI from '../../Component/Count'
import {connect} from "react-redux";
import {incrementAction,decrementAction,incrementAsyncAction} from "../../redux/actions/count_action";

function mapStateToProps(state) {
    return{count:state.count,total_person:state.persons.length}
}
function mapDispatchToProps(dispatch) {
    return {
        increment:(data)=>{dispatch(incrementAction(data))},
        decrement:(data)=>{dispatch(decrementAction(data))},
        incrementAsync:(data,time)=>{dispatch(incrementAsyncAction(data,time))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)