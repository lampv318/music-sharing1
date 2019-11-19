ActiveAdmin.register Artist do
  permit_params :name, :info

  filter :name
  filter :info
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
      f.input :info
    end
    f.actions
  end
end