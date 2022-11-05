import styled from "styled-components";

export const SwitchButton = ({isOn, toggleHandler}) => {
    return(
        <>
            <ToggleContainer onClick={toggleHandler}>
                <div className={`toggle-container ${isOn ? 'toggle--checked' : ''}`}>
                    <div className={`toggle-circle ${isOn ? 'toggle--checked' : ''}`}/>
                </div>
            </ToggleContainer>
        </>
    )
}


const ToggleContainer = styled.div`
    cursor: pointer;
    .toggle-container{
        display: flex;
        align-items:center;
        position:relative;
        width:50px;
        height:28px;
        background:#CBCBCB;
        border-radius: 50px;
        &.toggle--checked{background:#2584F4}

        .toggle-circle{
            display: inline-block;
            width:22px;
            height:22px;
            border-radius: 50px;
            background:#fff;
            margin-left:3px;
            transition:  all .3s;
            &.toggle--checked{margin-left:25px}
        }
    }
    
`