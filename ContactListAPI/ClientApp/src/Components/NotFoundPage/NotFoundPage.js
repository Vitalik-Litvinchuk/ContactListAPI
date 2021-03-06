import { Link } from "react-router-dom";
import {Fragment} from "react";

const NotFoundPage = () => {
    return (
        <Fragment>
            <div className="body-style pb-4">
                <div className="w-50">
                    <img alt="..." src="https://lh3.googleusercontent.com/KnAhFB7f8i88GvV9jZbGPMDEKSm8a_Ewz1YGsa7FVhM5ocHarcVq7nAZgpufUmzWmViqU76CbWvP13sh-oLWcjCCfCbvUAO7LOYfoYmtgvC9zST-myYY9AfqePPTMNR_8LVL67T1eT_S923Oi5YrkrtMGkPipUXxqDtdc0Jf9TaC7AI0sQjwaqCKh0YMaQ1Yo9_VgEiwSHB60N1qxfAYXj9g3RrMedThuDOLEh9lJgmvI_VzxRSh7ZEh6hoIeRsHSI55CUE8Buyv1G399y2e_B97LSgJh7d-GU4RJqlrfuRuAWL2x0p_PG52Z83niCdOV41o-z8Kai6z5Il1z8cXnGUvlaFj0P_cfxdvyRIGSpYjTI6LSU2UtCxD-kNgBah7CJVSCpR6AgMHHyQQ5gQYtodvn4C_9GrYKzs1rJn66wNeUfCLJ33aqXWZdW_gILJMXK60rJ_65aCIWHvsAieTqqitZURwH0mXEYqoowrddbKj62pKuB_vOgfkcQWgVuU2jqwEWcg41KZbmfdmAasYTvvRbzSpsG44myVsg-DrVLp7Wrgl2Uii47B-v3aPFYy1_y_2bVthygSryH8xGnPXgsaLFaNWywmZN1hNCavugel_-eyrQn7Elrau1U9ZoZECxL8w7ikuD6fzZf_EWfkFn29ZyLOuRfT8L0bqVrSeInzy6TkNOLV0je8pPyVcgeVJoL0_rQsFZE-Nt_CYutuW1Q4F=w301-h248-no" />
                </div>
                <div className="pr-2">
                    <h1>Page Not Found</h1>
                    <div>We can't find the page you're looking for.You can either return to the previous page, visit our homepage or contact our support team.</div>
                    <div>
                        <br />
                        <Link className="button-style w-100" to="/">Visit Homepage</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default NotFoundPage;