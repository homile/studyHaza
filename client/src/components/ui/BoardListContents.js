import styled from "styled-components";
import { ProfileImgXS } from "./ProfileImg";
import img from "../../images/pf_sample.png";

const BoardListContents = ({posts}) => {
    return (
      <ItemGroup>
        {posts.map((data)=> {
            return(
                <Item>
                    <h4>{data.title}</h4>
                    <div className="meta-info">
                    <span className="user"><ProfileImgXS src={img} /> {data.nickName}</span>
                    <span className="meta"><em>{data.dateCreated}</em> <em className="like"><i class="fa-solid fa-heart"></i>202</em></span>
                    </div>
                </Item>
            )
        })}
      </ItemGroup>
    )
  }

  export default BoardListContents

  const ItemGroup = styled.div`
    margin:25px 0 20px;
  `
  
  const Item = styled.div`
    width:100%;
    border:1px solid #ededed;
    border-radius: 25px;
    padding:25px 30px 20px;
    cursor: pointer;
    margin-bottom:12px;
    
    &:hover{
        border-color:#999;
        box-shadow: 0 8px 10px 10px rgba(0,0,0, .01);
    }

    h4{
        font-size:25px;
        font-family: 'Pretendard-Medium';
    }

    .meta-info{
        display: flex;
        justify-content: space-between;
        font-size:15px;
        padding-top:13px;

        span{
            display: flex;
            align-items: center;
            gap: 4px;
        }
        .meta{
            gap: 15px;

            .like {
                i{
                    margin-right:2px;
                    opacity:.2
                ;}
            }
        }
    }
  `