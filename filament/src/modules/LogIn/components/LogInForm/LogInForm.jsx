import { Alert, Button, Grid, Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hook/useLogin";
import { Link } from "react-router-dom";

const LogInForm = () => {
  const { mutate, error, isSuccess } = useLogin();
  const { register, handleSubmit } = useForm();
  const auth = (body) => {
    let newBody;
    if (body.loginNameEmail.includes("@")) {
      newBody = {
        loginEmail: body.loginNameEmail,
        loginPassword: body.loginPassword,
        loginName: "",
      };
    } else {
      newBody = {
        loginName: body.loginNameEmail,
        loginPassword: body.loginPassword,
        loginEmail: "",
      };
    }
    mutate(newBody);
  };

  return (
    <Grid>
      <form
        onSubmit={handleSubmit(auth)}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "864px",
          margin: "0 auto",
          background: "rgba(134, 155, 223, 0.14)",
          borderRadius: "10px",
          padding: "20px",
          rowGap: "40px",
          "@media(max-width:700px)": {
            rowGap: "20px",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <Input
            type="text"
            required
            placeholder="Ваш логин/Email"
            {...register("loginNameEmail")}
            sx={{
              height: "50px",
              padding: "34px 15px",
              color: "#fff",
              border: "2px solid rgba(83, 84, 136, 0.4)",
              outline: "none",
              fontSize: "20px",
              width: "100%",
              borderRadius: "10px",
              background: "rgba(134, 155, 223, 0.14)",
              "&::after": {
                content: "none",
              },
              "&::before": {
                content: "none",
              },
            }}
          />

          <Input
            type="password"
            placeholder="Ваш пароль"
            {...register("loginPassword")}
            sx={{
              height: "50px",
              padding: "34px 15px",
              color: "#fff",
              border: "2px solid rgba(83, 84, 136, 0.4)",
              outline: "none",
              fontSize: "20px",
              width: "100%",
              borderRadius: "10px",
              background: "rgba(134, 155, 223, 0.14)",

              "&::after": {
                content: "none",
              },
              "&::before": {
                content: "none",
              },
            }}
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "25px",
          }}
        >
          <Grid>
            <Link
              to="/forgotyourpassword"
              sx={{
                cursor: "pointer",
                color: "#6847F5",
                textDecoration: "none",
                "@media(max-width:425px)": {
                  fontSize: "14px",
                },
                "@media(max-width:393px)": {
                  fontSize: "12px",
                },
              }}
            >
              Забыли пароль ?
            </Link>
          </Grid>
        </Grid>

        <Grid>
          <Button
            // onClick={() => login()}
            type="submit"
            sx={{
              background: "linear-gradient( #6847F5, #A95BF3)",
              color: "#f2f2f2",
              border: "none",
              padding: "17px 50px",
              fontSize: "19px",
              fontWeight: "500",
              transition: "0.5s",
              textDecoration: "none",
              width: "100%",
              "@media(max-width:350px)": {
                fontSize: "17px",
              },
              "&:hover": {
                transition: "0.5s",
                background: "linear-gradient(#A95BF3,#6847F5)",
              },
            }}
          >
            Войти
          </Button>
        </Grid>
        {error && (
          <Alert
            severity="error"
            sx={{
              backgroundColor: "rgba(134, 155, 223, 0.14)",
              color: "#ff2400",
              border: "1px solid #ff2400",
            }}
          >
            {error.response.data?.result}
          </Alert>
        )}
      </form>
    </Grid>
  );
};

export default LogInForm;
